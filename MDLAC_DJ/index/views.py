from datetime import datetime, timedelta
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt

from login.models import Role, User


@login_required
def profile(request):
    user = request.user
    if request.method == 'POST':
        # Get the values from the POST request, defaulting to the existing values if they are empty
        email = request.POST.get('email', user.email).strip()
        phone = request.POST.get('phone', user.phone).strip()
        nickname = request.POST.get('nickname', user.nickname).strip()
        sex = request.POST.get('sex', user.sex).strip()

        # Debugging: Print the values to compare
        print(f"Original Email: {user.email}, New Email: {email}")
        print(f"Original Phone: {user.phone}, New Phone: {phone}")
        print(f"Original Nickname: {user.nickname}, New Nickname: {nickname}")
        print(f"Original Sex: {user.sex}, New Sex: {sex}")

        # Update profile only if there are changes
        if (user.email != email or
                user.phone != phone or
                user.nickname != nickname or
                user.sex != sex):
            user.email = email
            user.phone = phone
            user.nickname = nickname
            user.sex = sex
            user.save()
            messages.success(request, 'Profile updated successfully')
        else:
            messages.info(request, 'No changes detected')

        return redirect('index:profile')

    context = {
        'username': user.username,
        'nickname': user.nickname,
        'email': user.email,
        'phone': user.phone,
        'sex': user.sex,
        'role_name': user.role_ID.role_Name if user.role_ID else 'N/A',
        'date_joined': user.date_joined,
    }
    return render(request, 'index/form-profile.html', context)


@login_required
def reset_password(request):
    if request.method == 'POST':
        new_password = request.POST.get('new_password')
        if new_password:
            user = request.user
            user.set_password(new_password)  # This hashes the password
            user.save()
            messages.success(request, 'Password reset successfully')
            return redirect('index:profile')
        else:
            messages.error(request, 'Password cannot be empty')
    return redirect('index:profile')


# def set_index(request):

from django.http import JsonResponse

from django.http import JsonResponse
from django.utils.timezone import make_aware
import pytz
from datetime import datetime
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def wallet(request):
    user = request.user
    now = make_aware(datetime.now(), timezone=pytz.timezone('Asia/Shanghai'))
    remaining_days = (
            user.membership_period - now).days if user.membership_period and user.membership_period > now else 0

    if request.method == 'GET' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        # 如果是 AJAX GET 请求，返回 JSON 响应
        return JsonResponse({
            'balance': user.balance,
            'date': now.strftime('%Y-%m-%d %H:%M:%S'),
            'membership_period': user.membership_period.strftime(
                '%Y-%m-%d %H:%M:%S') if user.membership_period else None,
            'remaining_days': remaining_days,
        })

    context = {
        'balance': user.balance,
        'date': now.strftime('%Y-%m-%d %H:%M:%S'),
        'membership_period': user.membership_period.strftime(
                '%Y-%m-%d %H:%M:%S') if user.membership_period else None,
        'remaining_days': remaining_days,
    }
    return render(request, 'index/extras-wallet.html', context)


@csrf_exempt
@login_required
def recharge(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        if amount:
            try:
                amount = int(amount)
                request.user.balance += amount
                request.user.save()
                return JsonResponse({'status': 'success'})
            except ValueError:
                return JsonResponse({'status': 'error', 'message': 'Invalid amount'})
        else:
            return JsonResponse({'status': 'error', 'message': 'No amount provided'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request'})


@csrf_exempt
@login_required
def recharge_membership(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        days = request.POST.get('days')
        if amount and days:
            try:
                amount = int(amount)
                days = int(days)

                # 检查余额是否足够
                if request.user.balance >= amount:
                    # 扣除金额
                    request.user.balance -= amount

                    now = make_aware(datetime.now(), timezone=pytz.timezone('Asia/Shanghai'))

                    # 根据天数延长会员期限
                    if request.user.membership_period and request.user.membership_period > now:
                        request.user.membership_period += timedelta(days=days)
                    else:
                        request.user.membership_period = now + timedelta(days=days)

                    # 将用户的 role_ID 改为 102
                    role_102 = Role.objects.get(pk=102)
                    request.user.role_ID = role_102

                    request.user.save()
                    return JsonResponse({'status': 'success'})
                else:
                    return JsonResponse({'status': 'error', 'message': '余额不足，请充值余额'})
            except ValueError:
                return JsonResponse({'status': 'error', 'message': 'Invalid amount or days'})
        else:
            return JsonResponse({'status': 'error', 'message': 'No amount or days provided'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request'})


