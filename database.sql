CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, -- id makes todo unique and serial primary key makes the column unique
    description VARCHAR(255), -- description max char is 255
);