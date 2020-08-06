drop database if exists wishes_db;
create database wishes_db;

use wishes_db;

create table wishes (
    id int auto_increment not null,
    wish varchar(50) not null,
    primary key (id)
);

insert into wishes (wish)
values ("Meet John Cena"), ("Throw first pitch at Yankee stadium");