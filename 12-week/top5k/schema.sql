DROP DATABASE IF EXISTS topSongs_db;
CREATE DATABASE topSongs_db;

USE topSongs_db;

CREATE TABLE songs (
ranking INT NOT NULL,
artist VARCHAR(100) NOT NULL,
title VARCHAR(100) NOT NULL,
released INT,
firstFloat FLOAT,
secondFloat FLOAT,
thirdFloat FLOAT,
fourthFloat FLOAT,
fifthFloat FLOAT,
id INT NOT NULL auto_increment,
PRIMARY KEY (id)
);
