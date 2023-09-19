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

-- Dumping structure for table f8_orders.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `province_id` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_province_id_foreign` (`province_id`),
  CONSTRAINT `customers_province_id_foreign` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.customers: ~13 rows (approximately)
INSERT INTO `customers` (`id`, `name`, `email`, `password`, `status`, `province_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
	(1, 'ng nam', 'nam@gmail.com', '123456', 0, 1, NULL, '2023-08-30 03:58:05', '2023-08-30 03:58:07'),
	(2, 'tran an', 'a21111123fddmin@gmail.com', '12345aA@aaaaaaaa', 0, 1, NULL, '2023-08-30 03:59:01', '2023-08-30 03:59:02'),
	(4, 'linh', 'sddodo@gmail.com', '11111', 0, 2, NULL, '2023-08-30 04:00:10', '2023-08-30 04:00:11'),
	(5, 'trang trang1', 'trang3425fa6f6ad@gmail.com', '123456aA@', 0, 1, NULL, '2023-08-31 02:17:00', '2023-08-31 02:17:00'),
	(6, 'nguyen van truong', 'truong@gmail.com', 'd10906c3dac1172d4f60bd41f224ae75', 1, 1, NULL, NULL, NULL),
	(7, 'nguyen van cuong', 'cuong@gmail.com', '420df50a0a436cabe48e1597a9508a2b5449d35e', 0, 3, NULL, NULL, NULL),
	(8, 'nguyen rouong', 'cuonaddddg@gmail.com', '420df50a0a436cabe48e1597a9508a2b5449d35e', 1, 3, NULL, NULL, NULL),
	(9, 'nguyen van truong2', 'truon2222g@gmail.com', 'd10906c3dac1172d4f60bd41f224ae75', 0, 1, NULL, NULL, NULL),
	(10, 'bai tap 23', 'admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, 1, NULL, NULL, NULL),
	(11, 'bai tap 23', 'admin2@gmail.com', 'e67c10a4c8fbfc0c400e047bb9a056a1', 0, 2, NULL, NULL, NULL),
	(12, 'nguyen van d', 'vand@gmail.com', '12345Aa@', 0, 1, NULL, NULL, NULL),
	(13, 'nguyen van e', 'vane@gmail.com', '9ec44301cd2e8201051ff2e1be4134ac', 1, 3, NULL, NULL, NULL),
	(14, 'nguyen thanh nam', 'admi212121n@gmail.com', '198701fca0f4cc76f0e05e2fe5f47ba0', 1, NULL, NULL, NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
