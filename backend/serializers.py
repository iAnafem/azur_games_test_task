from rest_framework import serializers
from backend.models import VisitedPage


class VisitedPagesSerializer(serializers.ModelSerializer):
    date_of_visit = serializers.DateTimeField(format("%d-%m-%Y"), required=False)
    keyword = serializers.CharField(max_length=200, required=False)
    page_url = serializers.URLField(required=False)
    domain = serializers.CharField(max_length=200, required=False)
    load_time = serializers.IntegerField(required=False)
    status_code = serializers.CharField(max_length=3, required=False)
    page_size = serializers.IntegerField(required=False)
    total_size = serializers.IntegerField(required=False)

    class Meta:
        model = VisitedPage
        fields = '__all__'

