-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.0.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table f8_authentication01.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_authentication01.users: ~2 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
	(2, 'Hoàng An', 'hoangan.web@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
	(3, 'Nguyễn Văn Tuấn', 'vantuan@gmail.com', 'fcea920f7412b5da7be0cf42b8c93759');

INSERT INTO `users` (`name`, `email`, `password`) VALUES
	('nguyen nam', 'admin@gmail.com', MD5('12345'))



INSERT INTO `users` (`name`, `email`, `password`) VALUES
	('nguyen ha', 'admin2@gmail.com', MD5('12345'))
DELETE FROM users
	
ALTER TABLE users
ADD 'status' TINYINT(1) DEFAULT 0 AFTER PASSWORD

ALTER TABLE users
ADD status TINYINT(1) DEFAULT 0 AFTER password;


ALTER TABLE users
DROP COLUMN status;


DELETE FROM customers WHERE id = 4;

DELETE FROM customers WHERE id = 4;
/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

DROP DATABASE nam_baitap26nam_baitap27f8_backend_clif8_backend_clif8_backend_clif8_backend_clif8_backend_clif8_backend_clicustomersusersf8_authentication_01users