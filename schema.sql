DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(128) NOT NULL,
    burger_devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (burger_id)
);

INSERT INTO burgers (burger_name, burger_devoured) VALUE ("Grilled Chicken Burger", false);
INSERT INTO burgers (burger_name, burger_devoured) VALUE ("Fish Burger", false);
INSERT INTO burgers (burger_name, burger_devoured) VALUE ("Double Cheeseburger", false);


SELECT * FROM burgers;
