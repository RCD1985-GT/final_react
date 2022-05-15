#Tasty Backend

Este el cuarto proyecto consiste en la realización de un Backend donde he utilizado MySql, Sequelize, Express y NodeJS.

#Pre-requisitos 📋
Necesitaremos la instalación de un programa para realizar nuestro código, en este proyecto se ha utilizado Visual studio code,

#Tecnologías utilizadas 🚀
El proyecto ha sido desarrollado utilizando los siguientes paquetes en Nodejs:

Bcryptjs
Cors
Dotenv
Express
Jsonwebtoken
Mysql2
Nodemailer
Nodemon
Sequelize

#¿Como desplegar el proyecto? 📋
Sigue las instrucciones para clonar el proyecto en local:

- git clone url del repositorio

Sigue las instrucciones para instalar las depedencias necesarias:

- npm i

#Variables

Rellenar las variables necesarias en estos archivos para iniciar el proyecto:

config.json -> Incluir Username, Password, Database y host.

#Para crear la base de datos:

sequelize db:create

#Para crear las migraciones:

sequelize db:migrate

#Para crear los seeders

sequelize db:seed:all

😊 Ya esta todo listo para poder llamar a los endpoints, y poder recibir y modificar datos 😊

#Modelo entidad relacion
El diagrama de nuestra base de datos:

foto

#Endpoints 🛠️
El sistema puede realizar las siguientes acciones: 

CRUD Recetas
CRUD Guardados
CRUD Usuario

#Otros:
-encriptación del password
-proceso de autenticacion mediante jsonwebtoken


Autores ✒️
Rodrigo Campos