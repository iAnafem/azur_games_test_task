#!/usr/bin/env bash

python3.7 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver --setting=azure_games.production_settings