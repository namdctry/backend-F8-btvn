CREATE DATABASE database_02_nguyenthanhnam;
USE database_02_nguyenthanhnam;
CREATE TABLE customer (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    quantity INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
CREATE TABLE orderList (
    id INT NOT NULL PRIMARY KEY,
    customer_id INT,
    totalQuantity INT,
    totalMoney INT,
    status INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT orderList_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customer(id)
);
CREATE TABLE orderDetails (
    id INT NOT NULL PRIMARY KEY,
    customer_id INT,
    products_id INT,
    amount INT,
    total INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT orderDetails_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customer(id),
    CONSTRAINT orderDetails_products_id_foreign FOREIGN KEY (products_id) REFERENCES products(id)

);
DESCRIBE orderDetails