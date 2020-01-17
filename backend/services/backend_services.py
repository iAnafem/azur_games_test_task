from backend.models import VisitedPage
from django.db.models import Q
from django.db.models import Avg, Count, Min, Sum


def conditional_date_filter(from_date, until_date):
    if from_date and until_date:
        return Q(date_of_visit__range=(from_date, until_date))
    else:
        return Q()


def conditional_domain_filter(domain):
    if domain:
        return Q(domain__exact=domain)
    return Q()


def conditional_keyword_filter(keyword):
    if keyword:
        return Q(keyword__contains=keyword)
    return Q()


def conditional_status_code_filter(status_code):
    if status_code:
        if status_code.startswith('4'):
            return Q(status_code__startswith='4')
        else:
            return Q(status_code__exact=status_code)
    return Q()


def conditional_page_size_filter(page_size):
    if page_size:
        return Q(page_size__gt=page_size)
    return Q()


def get_visited_pages(query_params):
    from_date = query_params.get('from')
    until_date = query_params.get('until')
    keyword = query_params.get('keyword').lower()
    domain = query_params.get('domain')
    status_code = query_params.get('statusCode')
    min_page_size = query_params.get('minPageSize')
    gr_date = query_params.get('grDate')
    gr_key = query_params.get('grKey')
    gr_dom = query_params.get('grDom')
    gr_stat = query_params.get('grStat')

    visited_pages = VisitedPage.objects.filter(
        conditional_date_filter(from_date, until_date),
        conditional_keyword_filter(keyword),
        conditional_domain_filter(domain),
        conditional_status_code_filter(status_code),
        conditional_page_size_filter(min_page_size),
    )
    fields_for_grouping = []
    if gr_date:
        fields_for_grouping.append('date_of_visit')
    if gr_key:
        fields_for_grouping.append('keyword')
    if gr_dom:
        fields_for_grouping.append('domain')
    if gr_stat:
        fields_for_grouping.append('status_code')
    if fields_for_grouping:
        final_queryset = visited_pages.order_by(
            'keyword'
        ).values(
            *fields_for_grouping
        ).distinct().annotate(total_size=Sum('page_size'))

        return final_queryset

    return visited_pages
