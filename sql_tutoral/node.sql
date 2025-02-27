
CREATE TABLE menu (name VARCHAR(100),price INTEGER(10),category VARCHAR(50),created_date DATE , updated_date DATE);
CREATE TABLE `director`(`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(255),`address` VARCHAR(255),PRIMARY KEY(`id`));

ALTER TABLE `actor` ADD COLUMN `name`VARCHAR(255);
ALTER TABLE `actor` MODIFY `name`VARCHAR(255) NOT NULL;
DESCRIBE menu


INSERT INTO menu (name,price,category,created_date,updated_date) VALUES ("Dish A ",2000,"Main menu","2024-07-28","2024-07-28");
INSERT INTO  `director`()


ALTER TABLE students 
ADD CONSTRAINT fk_clubs 
FOREIGN KEY (club_id) 
REFERENCES clubs(club_id);

ALTER TABLE students ADD CONSTRAINT fk_clubs FOREIGN KEY (club_id) REFERENCES clubs(cludb_id);

ALTER TABLE students ADD CONSTRAINT unique_name UNIQUE (name);

SELECT books.book_id, books.title, authors.name AS author_name FROM books JOIN authors ON books.author_id = authors.author_id;
SELECT authors.author_id, authors.name FROM authors LEFT JOIN books ON authors.author_id = books.author_id WHERE books.book_id IS NULL;