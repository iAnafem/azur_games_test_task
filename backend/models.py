from django.db import models


class VisitedPage(models.Model):
    """This model represents pages which were visited by application users"""
    date_of_visit = models.DateTimeField(auto_now=True)
    keyword = models.CharField(max_length=200)
    page_url = models.URLField()
    domain = models.CharField(max_length=200)
    load_time = models.PositiveIntegerField()
    response_type = models.PositiveIntegerField()
    page_size = models.PositiveIntegerField()

    class Meta:
        ordering = ('date_of_visit', )
