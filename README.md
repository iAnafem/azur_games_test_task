# azur_games_test_task

Иструкция по запуску приложения.

По нормальному задеплоить не успел. База данных - sqlite3, "встроенная" в джанго. Под нее
не нужен отдельный сервер БД, джанго хранит данные БД в своей файловой системе.

Для запуска приложения под Linux выполняем следующие действия:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
1. Клонируем проект с GitHub и переходим в каталог проекта: 

    > git clone https://github.com/iAnafem/azur_games_test_task.git
                                 
    > cd azur_games_test_task/

2. Запускаем скрипт launch.sh:

    > sudo ./launch.sh
    
    ВАЖНО: если bash-интерпретатор у вас установлен не в 
    /bin/bash (где он установлен, вы можете узнать набрав whereis bash) 
    измените пусть к bash в перовой строке файла launch.sh. 

Что делает скрипт: 
                                
1. Устанавливаем Python3.7:

    > sudo apt update
                                                                                      
    > sudo apt install software-properties-common
                                                                                                                                                                                                   
    > sudo add-apt-repository ppa:deadsnakes/ppa
                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    > sudo apt install python3.7
                                                                                                                                                                     
2. Создаем и активируем новую виртуальную среду внутри каталога проекта:

    > python3.7 -m venv venv && source venv/bin/activate
                                                                             
3. Устанавливаем зависимости:

    > pip install --upgrade pip
                                  
    > pip install -r requirements.txt
                                                                                                     
4. В ./backend/migrations/0002_auto_20200116_1253.py создана функция,
которая добавляет в БД 1000 тестовых записей. В поле 'keyword' 10 вариантов:
    - c
    - pascal
    - kotlin
    - python
    - java
    - fortran
    - scala
    - javascript
    - php
    - go 

    Создаем схему БД и заполняем ее тестовыми данными:

    > ./manage.py migrate
                                                          
5. Запускаем приложение:

    > ./manage.py runserver --setting=azur_games.production_settings

Огромная просьба оставить фидбек!
