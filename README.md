# Divibank Net.core - Angular

App allows you to register new customers and add loans to each one, I use docker to encapsulate all app, before run docker-compose up command, please install docker 

## Installation

Use docker-compose up command to load all application inside container. This command must be run in root path, in the same path of docker-compose.yml file

```bash
docker-compose up
```

## Usage
Later you can use docker-compose down to close all docker container
```bash
import foobar

# returns 'words'
docker-compose down

```

## Access to app
To get access to the app you can navigate to http://localhost:4200/  
To get access to database you can navigate to http://localhost:9080/  

Database credential are:  

user : divibank  
passwword : divibank  
database: divibank

## Recomendation
Please check you local machine has port 4200, 9090 and 9080 avaliable

If you don't want to use docker, you have to generate all build manually

You cant inspect all code if you want