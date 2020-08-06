drop database if exists moviePlannerDB;
create database moviePlannerDB;

use moviePlannerDB;

create table movies (
    movie VARCHAR(40) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    primary key (id)
);

insert into movies (movie) value ("The Matrix");