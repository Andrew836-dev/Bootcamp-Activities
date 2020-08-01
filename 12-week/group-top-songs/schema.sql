drop database if exists topSongs_db;
create database topSongs_db;

use topSongs_db;

create table songs (
ranking int not null,
artist varchar(100) not null,
title varchar(100) not null,
released int,
firstFloat float,
secondFloat float,
thirdFloat float,
fourthFloat float,
fifthFloat float,
id int not null auto_increment,
primary key (id)
);

create table albums (
ranking int not null,
artist varchar(100) not null,
album varchar(100) not null,
released int,
firstFloat float,
secondFloat float,
thirdFloat float,
fourthFloat float,
fifthFloat float,
primary key (ranking)
);