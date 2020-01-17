from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VisitedPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_visit', models.DateTimeField()),
                ('keyword', models.CharField(max_length=200)),
                ('page_url', models.URLField()),
                ('domain', models.CharField(max_length=200)),
                ('load_time', models.PositiveIntegerField()),
                ('status_code', models.CharField(max_length=3)),
                ('page_size', models.PositiveIntegerField()),
            ],
            options={
                'ordering': ('date_of_visit',),
            },
        ),
    ]
