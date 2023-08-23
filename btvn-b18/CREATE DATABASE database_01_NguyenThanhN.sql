CREATE DATABASE database_01_NguyenThanhNam;
USE database_01_NguyenThanhNam;
CREATE TABLE courses(
    id int NOT NULL,
    name varchar(50) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
);
ALTER TABLE courses ADD COLUMN description text AFTER price;

ALTER TABLE courses CHANGE COLUMN detail content text NOT NULL;

CREATE TABLE teacher(
    id int NOT NULL,
    name varchar(50) not null,
    bio text,
    created_at timestamp,
    updated_at timestamp
);

INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES (1, "teacher1", "BIO 1", NOW(),NOW());
INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES (2, "teacher2", "BIO 2", NOW(),NOW());
INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES (3, "teacher3", "BIO 3", NOW(),NOW());


INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(1, "COURSE 1", 100000, "DESCRIPTION 1", "CONTENT 1", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(2, "COURSE 2", 200000, "DESCRIPTION 2", "CONTENT 2", 1, 0, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(3, "COURSE 3", 300000, "DESCRIPTION 3", "CONTENT 3", 1, 0, NOW(), NOW());

INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(4, "COURSE 4", 400000, "DESCRIPTION 4", "CONTENT 4", 2, 1, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(5, "COURSE 5", 500000, "DESCRIPTION 5", "CONTENT 5", 2, 1, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(6, "COURSE 6", 600000, "DESCRIPTION 6", "CONTENT 6", 2, 1, NOW(), NOW());

INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(7, "COURSE 7", 700000, "DESCRIPTION 7", "CONTENT 7", 3, 1, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(8, "COURSE 8", 800000, "DESCRIPTION 8", "CONTENT 8", 3, 1, NOW(), NOW());
INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES(9, "COURSE 9", 900000, "DESCRIPTION 9", "CONTENT 9", 3, 1, NOW(), NOW());

UPDATE courses
SET name = "course 11", price = 110000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 1;

UPDATE courses
SET name = "course 22", price = 220000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 2;

UPDATE courses
SET name = "course 33", price = 330000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 3;

UPDATE courses
SET name = "course 44", price = 440000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 4;

UPDATE courses
SET name = "course 55", price = 550000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 5;

UPDATE courses
SET name = "course 66", price = 660000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 6;

UPDATE courses
SET name = "course 77", price = 770000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 7;

UPDATE courses
SET name = "course 88", price = 880000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 8;

UPDATE courses
SET name = "course 99", price = 990000,
    updated_at = CURRENT_TIMESTAMP
WHERE ID = 9;


UPDATE teacher
SET bio = "bio 11",
    updated_at = CURRENT_TIMESTAMP
WHERE id = 1;

UPDATE teacher
SET bio = "bio 22",
    updated_at = CURRENT_TIMESTAMP
WHERE id = 2;

UPDATE teacher
SET bio = "bio 33",
    updated_at = CURRENT_TIMESTAMP
WHERE id = 3;


SELECT * FROM teacher;
SELECT * FROM courses;