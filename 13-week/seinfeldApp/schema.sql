DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE cast (
    character_name VARCHAR(30) NOT NULL,
    actor_name VARCHAR(60) NOT NULL,
    attitude VARCHAR(30) NOT NULL,
    coolness INT NOT NULL,
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)
);