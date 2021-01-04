CREATE DATABASE freddieAPP;
USE DATABASE freddieAPP;

CREATE TABLE clients (
  id int  NOT NULL AUTO_INCREMENT  ,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  notes varchar(500),
  primary key(id)

);

CREATE TABLE cycle (
  id int AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  client_id int NOT NULL,
  active boolean NOT NULL,
  notes varchar(500),
    primary key(id),

  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE week (
  id int AUTO_INCREMENT  NOT NULL,
  cycle_id int NOT NULL,
  date DATE,
  notes VARCHAR(500) ,
    primary key(id),
  FOREIGN KEY (cycle_id) REFERENCES cycle(id)
);

CREATE TABLE workout (
 id int AUTO_INCREMENT  NOT NULL,
  week_id int NOT NULL,
  day_num INT NOT NULL,
  notes VARCHAR(500),
primary key(id),
FOREIGN KEY (week_id) REFERENCES week(id)
);

CREATE TABLE exercise (
 id int AUTO_INCREMENT  NOT NULL,
  exercise_type_id int NOT NULL,
  workout_id int NOT NULL,
  workout_phase int NOT NULL,
  exercise_order int NOT NULL,
  notes VARCHAR(500),
  primary key(id),
  FOREIGN KEY (workout_id) REFERENCES workout(id),
  FOREIGN KEY(exercise_type_id) REFERENCES exercise_type(id)
);

CREATE TABLE exercise_type (
 id int AUTO_INCREMENT  NOT NULL,
  exercise_name varchar(255),
  exercise_desc VARCHAR(255),
  primary key(id)
);

CREATE TABLE sets (
  exercise_id int NOT NULL,
  target int ,
  actual int ,
  order_num int NOT NULL,
  FOREIGN KEY(exercise_id) REFERENCES exercise_type(id)
);

