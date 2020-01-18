#!/bin/bash

sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.7

python3.7 -m venv venv && source venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt

./manage.py migrate

./manage.py runserver --setting=azur_games.production_settings
