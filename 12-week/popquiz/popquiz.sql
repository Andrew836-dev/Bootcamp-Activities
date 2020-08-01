drop database if exists popquiz_db;
create database popquiz_db;

use popquiz_db;

create table quizzy (
id int not null auto_increment,
words varchar(50) not null,
primary key (id)
);

insert into quizzy (words)
value("These are some words"), ("These are also some words"), ("And the third words were words too");

select * from quizzy;