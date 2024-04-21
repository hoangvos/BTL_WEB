-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 03:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitis`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
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

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(50) NOT NULL,
  `sl` int(50) NOT NULL,
  `a_id` int(50) NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(50) NOT NULL,
  `a_id` int(50) NOT NULL,
  `time` date NOT NULL,
  `comment`varchar(250) NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
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

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `ptitle` varchar(250) NOT NULL,
  `rating` float NOT NULL DEFAULT 5,
  `pimg` varchar(250) NOT NULL,
  `pprice` varchar(250) NOT NULL,
  `pgender` varchar(100) NOT NULL,
  `pkind` varchar(100) NOT NULL,
  `sl` int(50) NOT NULL DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `ptitle`, `rating`, `pimg`, `pprice`, `pgender`, `pkind`, `sl`) VALUES
(1, 'Giày Thể Thao Nam Bitis Hunter Street Còn Gì Dùng Đó HSM006300', 4.5, 'https://product.hstatic.net/1000230642/product/hsm006302doo_fbdb3c22b0ca4e828b2b452100299df5.jpg', '19.99', 'Nữ', 'Hunter', 100),
(2, 'Giày Thể Thao Nam Bitis Hunter Street Còn Gì Dùng Đó HSM006300', 3.8, 'https://product.hstatic.net/1000230642/product/hsm006300nau__2__49db3ccdb8bc4c82a94402a944931e4d.jpg', '29.99', 'Nữ', 'Hunter', 50),
(3, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(4, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(5, 'Giày Thể Thao Nam Biti’s Hunter Street đế #BÀO x MARVEL Spiderman - Hunter-verse 2k23 edition HSM001898', 4, 'https://product.hstatic.net/1000230642/product/08b_774a037f29d040d3bd57509f7ecd7e47.png', '39.99', 'Nam', 'Hunter', 75),
(6, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(7, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(8, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(9, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(10, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(11, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(12, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(13, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(14, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(15, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(16, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(17, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(18, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(19, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(20, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(21, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(22, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(23, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(24, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(25, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(26, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(27, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(28, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(29, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(30, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(31, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(32, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(33, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(34, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(35, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(36, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(37, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(38, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(39, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(40, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(41, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(42, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(43, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(44, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(45, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(46, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(47, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(48, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(49, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(50, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(51, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(52, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(53, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Male', 'Giày Tây', 100),
(54, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(55, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(56, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(57, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(58, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(59, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(60, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100),
(61, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Male', 'Dép', 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cart_product` (`p_id`),
  ADD KEY `fk_cart_account` (`a_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comment_product` (`p_id`),
  ADD KEY `fk_comment_account` (`a_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_account` (`a_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_cart_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_comment_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
