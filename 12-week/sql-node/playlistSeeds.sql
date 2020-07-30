drop database if exists playlist_db;
create database playlist_db;

use playlist_db;

create table songs (
title varchar(50) not null,
id int not null auto_increment,
artist varchar(50),
genre varchar(50),
primary key (id)
);

insert into songs (title, artist, genre)
values("Pump it up", "Elvis Costello", "Rock"), ("Shove it", "The Deftones", "Nu Metal"), ("Like a Stone", "AudioSlave", "Rock");