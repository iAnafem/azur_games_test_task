from django.urls import re_path
from backend.api import VisitedPagesListAPI


urlpatterns = [
    re_path(r'^', VisitedPagesListAPI.as_view(), name="visited_pages"),
]
