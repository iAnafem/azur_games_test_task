# azur_games_test_task

Иструкция по запуску приложения.

По нормальному задеплоить не успел. База данных - sqlite3, "встроенная" в джанго. Под нее
не нужен отдельный сервер БД, джанго хранит данные БД в своей файловой системе.

Для запуска приложения под Linux выполняем следующие действия:

(если Python3.7 уже установлен, шаги 1-4 пропускаем)

1. sudo apt update
2. sudo apt install software-properties-common
3. sudo add-apt-repository ppa:deadsnakes/ppa
4. sudo apt install python3.7

5. git clone https://github.com/iAnafem/azur_games_test_task.git
6. cd azur_games_test_task/
7. python3.7 -m venv venv
8. source venv/bin/activate
9. pip install --upgrade pip
10. pip install -r requirements.txt
11. ./manage.py migrate
12. ./manage.py runserver --setting=azure_games.production_settings

Огромная просьба оставить фидбек!
