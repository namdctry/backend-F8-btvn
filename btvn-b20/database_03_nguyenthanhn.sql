CREATE DATABASE database_03_nguyenthanhnam;
use database_03_nguyenthanhnam;
CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(10),
  `name` varchar(50),
  `price` float,
  `saleprice` float,
  `detail` text,
  `quantity` int,
  `userManual` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `attribute` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50),
  `value` text,
  `product_id` int,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `attribute` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);


INSERT INTO products(code, name, price, saleprice, detail, quantity, userManual, created_at, updated_at) VALUES ("1", "Shoes1", "11000", "10000", "detail1", 111, "user manual 1", now(), now());


INSERT INTO products(code, name, price, saleprice, detail, quantity, userManual, created_at, updated_at) VALUES ("2", "Shoes2", "22000", "20000", "detail2", 000, "user manual 2", now(), now());


INSERT INTO products(code, name, price, saleprice, detail, quantity, userManual, created_at, updated_at) VALUES ("3", "Shoes3", "33000", "30000", "detail3", 333, "user manual 3", now(), now());




INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 1", "value 1", 4, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 2", "value 2", 4, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 3", "value 3", 4, now(), now());


INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 4", "value 4", 5, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 5", "value 5", 5, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 6", "value 6", 5, now(), now());



INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 7", "value 7", 6, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 8", "value 8", 6, now(), now());
INSERT INTO attribute(name, value, product_id, created_at, updated_at) VALUES ("name attribute 9", "value 9", 6, now(), now());



SELECT * from products;
SELECT `products`.id, `products`.`name` AS `product name`, `attribute`.`name`, `attribute`.`value` FROM products, attribute WHERE `products`.id = 6 AND products.id = attribute.product_id;
SELECT * FROM products WHERE quantity > 0;