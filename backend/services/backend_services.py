from backend.models import VisitedPage


def get_visited_pages():
    visited_pages = VisitedPage.objects.all()
    return visited_pages
