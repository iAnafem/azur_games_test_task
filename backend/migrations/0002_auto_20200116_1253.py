from django.db import migrations
from faker import Faker
import random
import pytz


def generate_test_data(apps, schema_editor):
    VisitedPage = apps.get_model('backend', 'VisitedPage')
    fake = Faker()
    list_of_keywords = [
        'c',
        'c++',
        'c#',
        'python',
        'java',
        'fortran',
        'scala',
        'javascript',
        'php',
        'go',
    ]
    list_of_domains = [fake.domain_name() for domain in range(25)]
    list_of_status_codes = ['200', '203', '204', '301', '302', '303', '304', '400', '401', '402', '403', '404', '405']

    for number in range(1000):
        # create fake data
        date_of_visit = fake.date_time_this_month(before_now=True, after_now=False, tzinfo=pytz.UTC)
        keyword = random.choice(list_of_keywords)
        domain = random.choice(list_of_domains)
        page_url = f'{domain}/{keyword}'
        load_time = fake.random_number(digits=2)
        status_code = random.choice(list_of_status_codes)
        page_size = fake.random_number(digits=5)

        # create VisitedPage object and save to DB
        page = VisitedPage.objects.create(
            date_of_visit=date_of_visit,
            keyword=keyword,
            domain=domain,
            page_url=page_url,
            load_time=load_time,
            status_code=status_code,
            page_size=page_size
        )
        page.save()


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(generate_test_data)
    ]
