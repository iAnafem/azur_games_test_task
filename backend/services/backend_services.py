from backend.models import VisitedPage
from django.db.models import Q


def conditional_date_filter(from_date, until_date):
    if from_date and until_date:
        return Q(date_of_visit__range=(from_date, until_date))
    else:
        return Q()


def conditional_domain_filter(domain):
    if domain:
        return Q(domain__exact=domain)
    else:
        return Q()


def conditional_keyword_filter(keyword):
    if keyword:
        return Q(keyword__contains=keyword)
    else:
        return Q()


def conditional_status_code_filter(status_code):
    if status_code:
        return Q(status_code__exact=status_code) | Q(status_code__startswith='4')
    else:
        return Q()


def conditional_page_size_filter(page_size):
    if page_size:
        return Q(page_size__gt=page_size)
    else:
        return Q()


def get_visited_pages(query_params):
    from_date = query_params.get('from')
    until_date = query_params.get('until')
    keyword = query_params.get('keyword').lower()
    domain = query_params.get('domain')
    status_code = query_params.get('statusCode')
    min_page_size = query_params.get('minPageSize')

    visited_pages = VisitedPage.objects.filter(
        conditional_date_filter(from_date, until_date),
        conditional_keyword_filter(keyword),
        conditional_domain_filter(domain),
        conditional_status_code_filter(status_code),
        conditional_page_size_filter(min_page_size),
    )

    query_groups = query_params.get('groupDate')
    query_groups1 = query_params.get('groupKey')
    print(query_groups, query_groups1)
    return visited_pages
