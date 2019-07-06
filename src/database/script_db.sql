--  creando la base de datos
CREATE DATABASE crudnodejsmysql;

-- usando la base de datos
USE crudnodejsmysql;

-- creating a table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  adderss VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- Mostrar todas la tablas
SHOW TABLES;

-- Describir la tabla
describe customer;