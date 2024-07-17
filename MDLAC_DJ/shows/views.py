from collections import defaultdict
from django.templatetags.static import static
from django.shortcuts import render
from django.core.paginator import Paginator
from flask import url_for

from .models import JdGood
from django.http import JsonResponse


# Create your views here.

# http://127.0.0.1:8000/shows/jdgoods/
def jdgood_list(request):
    query = request.GET.get('q')
    if query:
        goods_list = JdGood.objects.filter(name__icontains=query)
    else:
        goods_list = JdGood.objects.all()

    paginator = Paginator(goods_list, 20)  # 每页展示10条记录
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, "shows/jdgood_list.html", {'page_obj': page_obj, 'query': query})


# tables-responsive.html
def get_data(request):
    data = list(JdGood.objects.values())
    return JsonResponse(data, safe=False)


def get_data(request):
    data = list(JdGood.objects.values())
    return render(request, "shows/horizontal/tables-responsive.html", {'data': data})


def ui_alerts(request):
    return render(request, "shows/vertical/ui-alerts.html")


def ui_badge(request):
    return render(request, "shows/vertical/ui-badge.html")


def ui_buttons(request):
    return render(request, "shows/vertical/ui-buttons.html")


def ui_cards(request):
    return render(request, "shows/vertical/ui-cards.html")


def ui_dropdowns(request):
    return render(request, "shows/vertical/ui-dropdowns.html")


def ui_navs(request):
    return render(request, "shows/vertical/ui-navs.html")


def ui_tabs_accordions(request):
    return render(request, "shows/vertical/ui-tabs-accordions.html")


def ui_modals(request):
    return render(request, "shows/vertical/ui-modals.html")


def ui_images(request):
    return render(request, "shows/vertical/ui-images.html")


def ui_progressbars(request):
    return render(request, "shows/vertical/ui-progressbars.html")


def ui_pagination(request):
    return render(request, "shows/vertical/ui-pagination.html")


def ui_popover_tooltips(request):
    return render(request, "shows/vertical/ui-popover-tooltips.html")


def ui_spinner(request):
    return render(request, "shows/vertical/ui-spinner.html")


def ui_carousel(request):
    return render(request, "shows/vertical/ui-carousel.html")


def ui_video(request):
    return render(request, "shows/vertical/ui-video.html")


def ui_typography(request):
    return render(request, "shows/vertical/ui-typography.html")


def ui_grid(request):
    return render(request, "shows/vertical/ui-grid.html")


def advanced_alertify(request):
    return render(request, "shows/vertical/advanced-alertify.html")


def advanced_rating(request):
    return render(request, "shows/vertical/advanced-rating.html")


def advanced_nestable(request):
    return render(request, "shows/vertical/advanced-nestable.html")


def advanced_rangeslider(request):
    return render(request, "shows/vertical/advanced-rangeslider.html")


def advanced_sweet_alert(request):
    return render(request, "shows/vertical/advanced-sweet-alert.html")


def advanced_lightbox(request):
    return render(request, "shows/vertical/advanced-lightbox.html")


def icons_material(request):
    return render(request, "shows/vertical/icons-material.html")


def icons_ion(request):
    return render(request, "shows/vertical/icons-ion.html")


def icons_fontawesome(request):
    return render(request, "shows/vertical/icons-fontawesome.html")


def icons_themify(request):
    return render(request, "shows/vertical/icons-themify.html")


def icons_dripicons(request):
    return render(request, "shows/vertical/icons-dripicons.html")


def icons_typicons(request):
    return render(request, "shows/vertical/icons-typicons.html")


def form_elements(request):
    return render(request, "shows/vertical/form-elements.html")


def form_validation(request):
    return render(request, "shows/vertical/form-validation.html")


def form_advanced(request):
    return render(request, "shows/vertical/form-advanced.html")


def form_editors(request):
    return render(request, "shows/vertical/form-editors.html")


def form_uploads(request):
    return render(request, "shows/vertical/form-uploads.html")


def form_mask(request):
    return render(request, "shows/vertical/form-mask.html")


def form_summernote(request):
    return render(request, "shows/vertical/form-summernote.html")


def form_xeditable(request):
    return render(request, "shows/vertical/form-xeditable.html")


def calendar(request):
    return render(request, "shows/vertical/calendar.html")


def charts_morris(request):
    return render(request, "shows/vertical/charts-morris.html")


def charts_chartist(request):
    return render(request, "shows/vertical/charts-chartist.html")


def charts_chartjs(request):
    return render(request, "shows/vertical/charts-chartjs.html")


def charts_flot(request):
    return render(request, "shows/vertical/charts-flot.html")


def charts_c3(request):
    return render(request, "shows/vertical/charts-c3.html")


def charts_other(request):
    return render(request, "shows/vertical/charts-other.html")


def tables_basic(request):
    return render(request, "shows/vertical/tables-basic.html")


def tables_datatable(request):
    return render(request, "shows/vertical/tables-datatable.html")


def tables_responsive(request):
    return render(request, "shows/vertical/tables-responsive.html")


def tables_editable(request):
    return render(request, "shows/vertical/tables-editable.html")


def maps_google(request):
    return render(request, "shows/vertical/maps-google.html")


def maps_vector(request):
    return render(request, "shows/vertical/maps-vector.html")


def pages_blank(request):
    return render(request, "shows/vertical/pages-blank.html")


def pages_recoverpw(request):
    return render(request, "shows/vertical/pages-recoverpw.html")


def pages_lock_screen(request):
    return render(request, "shows/vertical/pages-lock-screen.html")


def pages_404(request):
    return render(request, "shows/vertical/pages-404.html")


def pages_500(request):
    return render(request, "shows/vertical/pages-500.html")


def extras_pricing(request):
    return render(request, "shows/vertical/extras-pricing.html")


def extras_invoice(request):
    return render(request, "shows/vertical/extras-invoice.html")


def extras_timeline(request):
    return render(request, "shows/vertical/extras-timeline.html")


def extras_faqs(request):
    return render(request, "shows/vertical/extras-faqs.html")


def extras_maintenance(request):
    return render(request, "shows/vertical/extras-maintenance.html")


def extras_comingsoon(request):
    return render(request, "shows/vertical/extras-comingsoon.html")
