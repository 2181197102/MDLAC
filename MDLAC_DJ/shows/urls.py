from django.urls import path
from .views import *

from . import views

app_name = "shows"
urlpatterns = [
    # http://127.0.0.1:8000/shows/jdgoods/
    path("jdgoods/", jdgood_list, name='jdgood_list'),
    # http://127.0.0.1:8000/shows/get_data/
    path("get_data/", get_data, name='get_data'),
    path("ui_alerts/", ui_alerts, name='ui_alerts'),
    # path("submit/", submit, name='submit'),
    path("ui_badge/", ui_badge, name='ui_badge'),
    path("ui_buttons/", ui_buttons, name='ui_buttons'),
    path("ui_cards/", ui_cards, name='ui_cards'),
    path("ui_dropdowns/", ui_dropdowns, name='ui_dropdowns'),
    path("ui_navs/", ui_navs, name='ui_navs'),
    path("ui_tabs_accordions/", ui_tabs_accordions, name='ui_tabs_accordions'),
    path("ui_modals/", ui_modals, name='ui_modals'),
    path("ui_images/", ui_images, name='ui_images'),
    path("ui_progressbars/", ui_progressbars, name='ui_progressbars'),
    path("ui_pagination/", ui_pagination, name='ui_pagination'),
    path("ui_popover_tooltips/", ui_popover_tooltips, name='ui_popover_tooltips'),
    path("ui_spinner/", ui_spinner, name='ui_spinner'),
    path("ui_carousel/", ui_carousel, name='ui_carousel'),
    path("ui_video/", ui_video, name='ui_video'),
    path("ui_typography/", ui_typography, name='ui_typography'),
    path("ui_grid/", ui_grid, name='ui_grid'),
    path("advanced_alertify/", advanced_alertify, name='advanced_alertify'),
    path("advanced_rating/", advanced_rating, name='advanced_rating'),
    path("advanced_nestable/", advanced_nestable, name='advanced_nestable'),
    path("advanced_rangeslider/", advanced_rangeslider, name='advanced_rangeslider'),
    path("advanced_sweet_alert/", advanced_sweet_alert, name='advanced_sweet_alert'),
    path("advanced_lightbox/", advanced_lightbox, name='advanced_lightbox'),
    path("icons_material/", icons_material, name='icons_material'),
    path("icons_ion/", icons_ion, name='icons_ion'),
    path("icons_fontawesome/", icons_fontawesome, name='icons_fontawesome'),
    path("icons_themify/", icons_themify, name='icons_themify'),
    path("icons_dripicons/", icons_dripicons, name='icons_dripicons'),
    path("icons_typicons/", icons_typicons, name='icons_typicons'),
    path("form_elements/", form_elements, name='form_elements'),
    path("form_validation/", form_validation, name='form_validation'),
    path("form_advanced/", form_advanced, name='form_advanced'),
    path("form_editors/", form_editors, name='form_editors'),
    path("form_uploads/", form_uploads, name='form_uploads'),
    path("form_mask/", form_mask, name='form_mask'),
    path("form_summernote/", form_summernote, name='form_summernote'),
    path("form_xeditable/", form_xeditable, name='form_xeditable'),
    path("calendar/", calendar, name='calendar'),
    path("calendar/<str:brand>", calendar_ciyun, name='calendar'),   # 网址后面带参数
    path("charts_morris/", charts_morris, name='charts_morris'),
    path("charts_chartist/", charts_chartist, name='charts_chartist'),
    path("charts_chartjs/", charts_chartjs, name='charts_chartjs'),
    path("charts_flot/", charts_flot, name='charts_flot'),
    path("charts_c3/", charts_c3, name='charts_c3'),
    path("charts_other/", charts_other, name='charts_other'),
    path("tables_basic/", tables_basic, name='tables_basic'),
    path("tables_datatable/", tables_datatable, name='tables_datatable'),
    path("tables_responsive/", tables_responsive, name='tables_responsive'),
    path("tables_editable/", tables_editable, name='tables_editable'),
    path("maps_google/", maps_google, name='maps_google'),
    path("maps_vector/", maps_vector, name='maps_vector'),
    path("pages_blank/", pages_blank, name='pages_blank'),
    path("pages_recoverpw/", pages_recoverpw, name='pages_recoverpw'),
    path("pages_lock_screen/", pages_lock_screen, name='pages_lock_screen'),
    path("pages_404/", pages_404, name='pages_404'),
    path("pages_500/", pages_500, name='pages_500'),
    path("extras_pricing/", extras_pricing, name='extras_pricing'),
    path("extras_invoice/", extras_invoice, name='extras_invoice'),
    path("extras_timeline/", extras_timeline, name='extras_timeline'),
    path("extras_faqs/", extras_faqs, name='extras_faqs'),
    path("extras_maintenance/", extras_maintenance, name='extras_maintenance'),
    path("extras_comingsoon/", extras_comingsoon, name='extras_comingsoon'),
    path('get_csv_data/', views.get_csv_data, name='get_csv_data'),  # 新增的路由
    path('get_csv_data_comments/', views.get_csv_data_comments, name='get_csv_data_comments'),  # 新增的路由
    path('delete_article/', views.delete_article, name='delete_article'),  # 新增的路由

]