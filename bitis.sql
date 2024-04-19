-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 15, 2023 lúc 03:09 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bitis`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `ptitle` varchar(250) NOT NULL,
  `rating` float NOT NULL DEFAULT 0,
  `pimg` varchar(250) NOT NULL,
  `pprice` varchar(250) NOT NULL,
  `pgender` varchar(100) NOT NULL, 
  `pkind` varchar(100) NOT NULL,
  `sl` int(50) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------


CREATE TABLE `cart` (
  `id` int(50) NOT NULL,
  `sl` int(50) NOT NULL,
  `a_id` int(50) NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




--
-- Cấu trúc bảng cho bảng `commentdb`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `a_id` int(50) NOT NULL,
  `time` date NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- --------------------------------------------------------


--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `a_id` int(50) NOT NULL,
  `total` mediumint(200) NOT NULL,
  `billing_address` varchar(180) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(150) NOT NULL,
  `note` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------




ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `cart`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE;


ALTER TABLE `account`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;


ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE;

ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

ALTER TABLE `comment`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
