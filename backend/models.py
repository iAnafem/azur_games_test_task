from django.db import models


class VisitedPage(models.Model):
    """This model represents pages which were visited by application users"""
    date_of_visit = models.DateTimeField()
    keyword = models.CharField(max_length=200)
    page_url = models.URLField()
    domain = models.CharField(max_length=200)
    load_time = models.PositiveIntegerField()
    status_code = models.CharField(max_length=3)
    page_size = models.PositiveIntegerField()

    class Meta:
        ordering = ('date_of_visit', )
