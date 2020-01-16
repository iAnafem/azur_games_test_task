from rest_framework import generics
from backend.serializers import VisitedPagesSerializer
from backend.services.backend_services import get_visited_pages


class VisitedPagesListAPI(generics.ListAPIView):
    """
    Retrieves all the visited pages by specified query parameters
    """
    serializer_class = VisitedPagesSerializer

    def get_queryset(self):
        return get_visited_pages()
