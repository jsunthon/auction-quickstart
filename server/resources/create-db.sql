create database if not exists auction_quickstart;

use auction_quickstart;

drop table if exists reviews;
drop table if exists products;
drop table if exists users;

create table users (
  id int PRIMARY KEY  NOT NULL AUTO_INCREMENT,
  username VARCHAR(256),
  password VARCHAR(256),
  firstName VARCHAR(256),
  lastName VARCHAR(256),
  email VARCHAR(100)
);

create table products (
  id int PRIMARY KEY not null AUTO_INCREMENT,
  title VARCHAR(256),
  price FLOAT,
  rating FLOAT,
  description TEXT,
  categories VARCHAR(256)
);

create table reviews (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dateCreated TIMESTAMP NOT NULL default current_timestamp,
  rating FLOAT,
  comment TEXT,
  productId int,
  userId int,
  FOREIGN KEY (productId) REFERENCES products (id),
  FOREIGN KEY (userId) REFERENCES users (id)
);

