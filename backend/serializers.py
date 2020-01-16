from rest_framework import serializers
from backend.models import VisitedPage


class VisitedPagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = VisitedPage
        fields = '__all__'
