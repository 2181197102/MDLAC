from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
# from MDLAC.MDLAC_DJ.shows.models import JdGood
from login.models import User



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

