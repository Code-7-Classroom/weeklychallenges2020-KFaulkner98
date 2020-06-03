#VERY EASY
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Subaru', 'WRX', 2019), ('Ford', 'Mustang', 2020), ('Tesla', 'Modlel X', 2020);
DROP TABLE cars;

#EASY
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date year, 
    author_firstname VARCHAR(255),
    author_lastname VARCHAR(255)
);
INSERT INTO books (title, publish_date, author_firstname, author_lastname)
VALUES ('Summer Ball', 2007, 'Mike', 'Lupica'), ('The Mamba Mentality: How I Play', 2018, 'Kobe', 'Bryant'), ('Diary of a Wimpy Kid', 2007, 'Jeff', 'Kinney'), ('Heat', 2006, 'Mike', 'Lupica'), ('Life of Pi', 2001, 'Yann', 'Martel');
DROP TABLE books;

#MEDIUM
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating VARCHAR(255)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('The Lion King', 1994, 'G'), ('Toy Story', 1995, 'G'), ('Joker', 2019, 'R'), ('Napolean Dynamite', 2006, 'PG'), ('Transformers', 2007, 'PG-13'), ('Avengers: Endgame', 2019, 'PG-13'), ('Logan', 2017, 'R'), ('Guardians of the Galaxy', 2015, 'PG-13'), ('The Fast and Furious', 2001, 'PG-13'), ('X-Men', 2001, 'PG-13');
SELECT * FROM movies 
WHERE title LIKE '%s%' ORDER BY release_date ASC;
DROP TABLE movies;

#HARD
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating VARCHAR(255),
    director_first VARCHAR(255), 
    director_last VARCHAR(255)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('The Lion King', 1994, 'G', 'Rob', 'Minkoff'), ('Toy Story', 1995, 'G', 'John', 'Lasseter'), ('Joker', 2019, 'R', 'Todd', 'Phillips'), ('Napolean Dynamite', 2006, 'PG', 'Jared', 'Hess'), ('Transformers', 2007, 'PG-13', 'Michael', 'Bay'), ('Avengers: Endgame', 2019, 'PG-13', 'Joe', 'Russo'), ('Logan', 2017, 'R', 'James', 'Mangold'), ('Guardians of the Galaxy', 2015, 'PG-13', 'James', 'Gunn'), ('The Fast and Furious', 2001, 'PG-13', 'Rob', 'Cohen'), ('X-Men', 2001, 'PG-13', 'Bryan', 'Singer');
SELECT * FROM movies ORDER by fullname;

DELETE FROM movies WHERE REGEXP_LIKE(director_last, '[r-z]$');

SELECT * FROM movies LIMIT 3;
DROP TABLE movies;

#VERY HARD
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Subaru', 'WRX', 2019), ('Ford', 'Mustang', 2019), ('Tesla', 'Modlel X', 2020);
ALTER TABLE cars ADD COLUMN prices INT;
ALTER TABLE cars ADD COLUMN colors VARCHAR(255);
UPDATE cars SET prices=27495,  colors='WR Blue Pearl, Crystal Black Silica, Crystal White Pearl, Pure Red' WHERE make = 'Subaru';
UPDATE cars SET prices=27150,  colors='Shadow Black, Velocity Blue, Iconic Silver' WHERE make = 'Ford';
UPDATE cars SET prices=74690,  colors='Pearl White Multi-Coat, Solid Black, Deep Blue Metallic' WHERE make = 'Tesla';
ALTER TABLE cars ADD COLUMN makemodel VARCHAR(50);
UPDATE cars SET makemodel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM cars GROUP BY make;
DROP TABLE cars;

#Utility
DROP TABLE cars;
DESCRIBE movies;
SELECT * FROM movies;