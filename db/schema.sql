CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(32) NOT NULL,
    burger_devoured BOOLEAN NOT NULL,
    PRIMARY KEY (burger_id)
);