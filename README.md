# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

Django 10 and Angular 2 hybrid applications. This configuration defaults to MySQL.

### How do I get set up? ###
####Requirements

1. Python
2. Pip
3. Virtualenv
4. Node v6<

####Installation
1. virtualenv [project name]
2. cd into project directory
3. source bin/activate to start virtual server
4. git clone https://rafay826@bitbucket.org/rafay826/django-ng2-hybrid.git src
5. copy requirements.txt in the root of the project
```
cp src/requirements.txt .
```
7. pip install -r requirements
8. change into cloned repo
```
cd src
```
9. install node modules
``` 
sudo npm i
```
10. build distribution
```
npm run build
```
11. tell django to get project assets
```
python manage.py collectstatic
```
12. start your MySQL server with the credentials used in your project settings
13. run the server
```
python manage.py runserver
```

####How is the project assembled?
1. The ng-src directory controls the front-end of the application, using Angular 2, we're defining components providing behavior and template design to consume the back-end.
2. On the back-end we're encapsulating our environment with a virtual server, installing Python's dependencies from the requirements.txt file copied from the cloned repo.
3. This installs Django, controlling our server-side logic.
4. Our default setting has configurations setup for a MySQL database.

### Who do I talk to? ###

Rafay Choudhury
rafay826@gmail.com