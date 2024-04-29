-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2024 at 07:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

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
  `comment` varchar(250) NOT NULL,
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
(2, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 4, 'https://product.hstatic.net/1000230642/product/hsw005800xam__2__9c53325536e2425c8bd7d47eb36ed027.jpg', '39.99', 'Nam', 'Hunter', 75),
(3, 'Giày Thể Thao Nam Biti’s Hunter Street đế #BÀO x MARVEL Spiderman - Hunter-verse 2k23 edition HSM001898', 4, 'https://product.hstatic.net/1000230642/product/08b_774a037f29d040d3bd57509f7ecd7e47.png', '39.99', 'Nam', 'Hunter', 75),
(4, 'Sandal Nam Bitis BDM001577', 4.5, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '19.99', 'Nam', 'Sandal', 100),
(5, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600\n', 4.5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '19.99', 'Nam', 'Giày Thể Thao', 100),
(6, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '19.99', 'Nam', 'Giày Chạy Bộ', 100),
(7, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '19.99', 'Nam', 'Giày Đá Banh', 100),
(8, 'Giày Da Nam Bitis X DMM371880\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '19.99', 'Nam', 'Giày Tây', 100),
(9, 'Dép Nam Bitis BPM000200\r\n', 4.5, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '19.99', 'Nam', 'Dép', 100),
(10, 'Giày Thể Thao Nữ Gosto GFW018100', 3, 'https://product.hstatic.net/1000230642/product/gfw018100hog__2__0379dd9a60484bd5965aa7839565482c_1024x1024.jpg', '1,011,000', 'Nữ', 'Gosto', 100),
(11, 'Sandal Nữ Biti\'s Hunter HEW000800', 3.5, 'https://product.hstatic.net/1000230642/product/hew000800hog_d467a56b559f46c1aaead88baf13e923_1024x1024.jpg', '520,000', 'Nữ', 'Sandal', 100),
(12, 'Giày Búp Bê Nữ Biti\'s BBW001688', 3.8, 'https://product.hstatic.net/1000230642/product/bbw001688xdg2_b324da45894b4547ab16a5e4173e7825_1024x1024.jpg', '369,000', 'Nữ', 'Giày Búp Bê', 100),
(13, 'Giày Bít Thời Trang Nữ Biti\'s BFW003588', 3.8, 'https://product.hstatic.net/1000230642/product/bfw003588kem__2__f7ddeb5aeb3442539d5740193b53e68d_1024x1024.jpg', '432,000', 'Nữ', 'Giày Thời Trang', 100),
(14, 'Giày Chạy Bộ Nữ Biti\'s Hunter Running DSWH08300', 4, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-ls3g5-color-cam_a6f2a5322e6742aa83eb8c32b20f1485_1024x1024.jpg', '735,750', 'Nữ', 'Giày Chạy Bộ', 100),
(15, 'Giày Thể Thao Nữ Biti\'s BSW002300', 4, 'https://product.hstatic.net/1000230642/product/bsw002300xam2_0266e9c574c845a2b2c4f61623e26c11_1024x1024.jpg', '555,000', 'Nữ', 'Giày Thể Thao', 100),
(16, 'Dép Eva Phun Nữ Biti\'s BEW000900', 5, 'https://product.hstatic.net/1000230642/product/bew000900hog__2__28ba40e840084077a34276a4edac5758_1024x1024.jpg', '261,000', 'Nữ', 'Dép', 100),
(17, 'Giày Thể Thao Bé Trai Biti\'s Spiderman BSB004398', 5, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__2__cc74839870d743eda169ffebddbbcedd_1024x1024.jpg', '579,000', 'Bé Trai', 'Giày Thể Thao', 100),
(18, 'Sandal Bé Trai Biti\'s BEB002100', 5, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg', '305,000', 'Bé Trai', 'Sandal', 100),
(19, 'Dép Eva Bé Trai Biti\'s DEB010101', 3, 'https://product.hstatic.net/1000230642/product/deb010101trg__2__1d14e5c7ef184088bbeb33003f28d151_1024x1024.jpg', '221,000', 'Bé Trai', 'Dép', 100),
(20, 'Giày búp bê bé gái DBB010901', 5, 'https://product.hstatic.net/1000230642/product/ttn_6844_50d2f558d2e74a1f8bd5dcb79a00fd87_1024x1024.jpg', '344,000', 'Bé Gái', 'Giày Búp Bê', 100),
(21, 'Giày Thể Thao Bé Gái Biti\'s BSG002600', 4.1, 'https://product.hstatic.net/1000230642/product/bsg002600hog__2__7f24ad58575340ba87654040a82889bb_1024x1024.jpg', '447,000', 'Bé Gái', 'Giày Thể Thao', 100),
(22, 'Sandal Bé Gái Biti\'s BEG002200', 5, 'https://product.hstatic.net/1000230642/product/beg002200vag__4__270e08ca1e654a84b8ccedaae48618b7_1024x1024.jpg', '310,000', 'Bé Gái', 'Sandal', 100),
(23, 'Dép Eva Phun Bé Gái Biti\'s E-Cloud BEG001801', 5, 'https://product.hstatic.net/1000230642/product/beg001801vag__2__1f339d6856974ba3ac4df1471d1ddac1_1024x1024.jpg', '128,000', 'Bé Gái', 'Dép', 100),
(24, 'Giày Tập Đi Bé Gái DTG003900', 5, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-u8nfg-color-cam_edbba01013b5474bade2182eb08b24ca_1024x1024.jpg', '172,000', 'Bé Gái', 'Giày Tập Đi', 100);

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `productID`, `soluong`, `size`) VALUES
(1, 1, 23, 39),
(2, 1, 39, 40),
(3, 1, 54, 41),
(4, 1, 87, 42),
(5, 1, 92, 43),
(6, 1, 34, 44),
(7, 1, 16, 45),
(8, 2, 23, 39),
(9, 2, 39, 40),
(10, 2, 54, 41),
(11, 2, 87, 42),
(12, 2, 92, 43),
(13, 2, 34, 44),
(14, 2, 16, 45),
(15, 3, 23, 39),
(16, 3, 39, 40),
(17, 3, 54, 41),
(18, 3, 87, 42),
(19, 3, 92, 43),
(20, 3, 34, 44),
(21, 3, 16, 45),
(22, 4, 23, 39),
(23, 4, 39, 40),
(24, 4, 54, 41),
(25, 4, 87, 42),
(26, 4, 92, 43),
(27, 4, 34, 44),
(28, 4, 16, 45),
(29, 5, 23, 39),
(30, 5, 39, 40),
(31, 5, 54, 41),
(32, 5, 87, 42),
(33, 5, 92, 43),
(34, 5, 34, 44),
(35, 5, 16, 45),
(36, 6, 23, 39),
(37, 6, 39, 40),
(38, 6, 54, 41),
(39, 6, 87, 42),
(40, 6, 92, 43),
(41, 6, 34, 44),
(42, 6, 16, 45),
(43, 7, 23, 39),
(44, 7, 39, 40),
(45, 7, 54, 41),
(46, 7, 87, 42),
(47, 7, 92, 43),
(48, 7, 34, 44),
(49, 7, 16, 45),
(50, 8, 23, 39),
(51, 8, 39, 40),
(52, 8, 54, 41),
(53, 8, 87, 42),
(54, 8, 92, 43),
(55, 8, 34, 44),
(56, 8, 16, 45),
(57, 9, 23, 39),
(58, 9, 39, 40),
(59, 9, 54, 41),
(60, 9, 87, 42),
(61, 9, 92, 43),
(62, 9, 34, 44),
(63, 9, 16, 45),
(64, 10, 11, 35),
(65, 10, 12, 36),
(66, 10, 11, 37),
(67, 10, 13, 38),
(68, 10, 12, 39),
(69, 11, 16, 35),
(70, 11, 18, 36),
(71, 11, 33, 37),
(72, 11, 37, 38),
(73, 11, 23, 39),
(74, 12, 12, 35),
(75, 12, 16, 36),
(76, 12, 16, 37),
(77, 12, 12, 38),
(78, 12, 11, 39),
(79, 13, 11, 35),
(80, 13, 13, 36),
(81, 13, 11, 37),
(82, 13, 13, 38),
(83, 13, 13, 39),
(84, 14, 33, 35),
(85, 14, 15, 36),
(86, 14, 12, 37),
(87, 14, 11, 38),
(88, 14, 16, 39),
(89, 15, 14, 35),
(90, 15, 14, 36),
(91, 15, 14, 37),
(92, 15, 17, 38),
(93, 15, 18, 39),
(94, 16, 11, 35),
(95, 16, 13, 36),
(96, 16, 11, 37),
(97, 16, 14, 38),
(98, 16, 11, 39),
(99, 16, 12, 40),
(100, 17, 11, 30),
(101, 17, 14, 31),
(102, 17, 11, 32),
(103, 17, 16, 33),
(104, 17, 15, 34),
(105, 17, 11, 35),
(106, 18, 11, 30),
(107, 18, 19, 31),
(108, 18, 11, 32),
(109, 18, 15, 33),
(110, 18, 12, 34),
(111, 19, 12, 30),
(112, 19, 12, 31),
(113, 19, 15, 32),
(114, 19, 11, 33),
(115, 19, 16, 34),
(116, 20, 14, 28),
(117, 20, 15, 29),
(118, 20, 11, 30),
(119, 20, 16, 31),
(120, 20, 11, 32),
(121, 21, 11, 30),
(122, 21, 16, 31),
(123, 21, 11, 32),
(124, 21, 16, 33),
(125, 21, 14, 34),
(126, 22, 11, 35),
(127, 22, 14, 36),
(128, 22, 16, 37),
(129, 22, 11, 38),
(130, 22, 11, 39),
(131, 23, 20, 24),
(132, 23, 11, 25),
(133, 23, 11, 26),
(134, 23, 15, 27),
(135, 23, 12, 28),
(136, 24, 11, 20),
(137, 24, 11, 21),
(138, 24, 15, 22),
(139, 24, 14, 23);

-- --------------------------------------------------------

--
-- Table structure for table `subimage`
--

CREATE TABLE `subimage` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subimage`
--

INSERT INTO `subimage` (`id`, `productID`, `img`) VALUES
(1, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__10__f3fb2850cdd545049a232d62dd50950b_large.jpg'),
(2, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__5__0796b1ba019443c28887441c3fc58c9e.jpg'),
(3, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__4__06e23d42a7084abe8248e3477b739c1c.jpg'),
(4, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__8__bb6e0325e75a443bae1e30d2b11007e3_large.jpg'),
(5, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__6__4e5b7a35fd8441119d57a69604fe83dd_large.jpg'),
(6, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__7__12585c3b53794a0089f5c21f2967768b_large.jpg'),
(7, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__10__e332c39edb2642bba1c83a98477b713f_large.jpg'),
(8, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__5__4d8957499caf49eb94f82b1bbae99dc1_large.jpg'),
(9, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__4__06b7a5bfa1f64ebaa7f19f385527776b_large.jpg'),
(10, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__7__bac203e149e94d759f8588be0ccf4143_large.jpg'),
(11, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__8__18c5b59677ff41e4800b4742d888ea00_large.jpg'),
(12, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__6__2013d04823914baeabc103e2e9a92343_large.jpg'),
(13, 3, 'https://product.hstatic.net/1000230642/product/02__1__c82b70b0ca0248a0b38dd171c3a3259a_large.png'),
(14, 3, 'https://product.hstatic.net/1000230642/product/03_a611d7213cc14f5d91bcdefe18724e37_large.png'),
(15, 3, 'https://product.hstatic.net/1000230642/product/07_62a37637988d418cb1ca988193b197d2_large.png'),
(16, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__2__e97f18376d594007bd65d1de7022fb15_large.jpg'),
(17, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__3__10d4ac5cd32446cfb4043e54fab8824c_large.jpg'),
(18, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__4__c1441a1eb0c548de97f5ab9a9b908e47_large.jpg'),
(19, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__4__0b1de713b2644d009c1713cf5ca5ed15_large.jpg'),
(20, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__5__d4941313d4c5446ea6a724ed09a2d0fb_large.jpg'),
(21, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__6__196b5602a938472e8c4958232ddbc9e6_large.jpg'),
(22, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__10__80c2eacf41a9487986ff7e51e9e555bc_large.jpg'),
(23, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__7__4710abc05df34910b4806d413f18319c_large.jpg'),
(24, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__3__44b8ca514944426ba1919eb1bd83babd_large.jpg'),
(25, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__4__94266f8069ff4ac49686105f0b2bdd2c_large.jpg'),
(26, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__5__7b26d250a70b453f8ba2292c7f8d311f_large.jpg'),
(27, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__10__1490f0bcdd4649b18f73017c6c9f2f06_large.jpg'),
(28, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__6__b99127a3cb4c428b8f8afabdcf1f48d4_large.jpg'),
(29, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__3__3886f199f5894caba94b8019aa6e497e_large.jpg'),
(30, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__7__478ee3c6c7374f33b526f445f9100dff_large.jpg'),
(31, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-otjch-color-xam_e696c7663f104389bd7cb6643fd96ebc_large.jpg'),
(32, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-otjch-color-xam_e696c7663f104389bd7cb6643fd96ebc_large.jpg'),
(33, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-0mhwh-color-xam_19903831807a42ac974e1fb3be33a70a_large.jpg'),
(34, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-bbkmo-color-xam_889d079814b7447bb5d4b92b8f068d64_large.jpg'),
(35, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-ebgzk-color-xam_cca5961011ea439fb8887bc015d0c338_large.jpg'),
(36, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-6q57j-color-xam_a8463c6a86a44bc59c1e908c9a2050ee_large.jpg'),
(37, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__4__c8f18003aac449bb8b85e9d8dde75608_large.jpg'),
(38, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__5__656911ee3f8b40bdac0ed41a762fd5ee_large.jpg'),
(39, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__10__37b06c4f3fa54ef8a3999b76afdef645_large.jpg'),
(40, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__6__53d01a00db48476c9367ec8c85b2fde2_large.jpg'),
(41, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__7__16c9cb8719ff432e991c305289ac8d19_large.jpg'),
(42, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__3__d95af1eec7474e41b10c8e723f829750_large.jpg'),
(43, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__4__99a7a2390f514d0f8c4614d21821e6ee_large.jpg'),
(44, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__4__99a7a2390f514d0f8c4614d21821e6ee_large.jpg'),
(45, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__1__efc31df2ac2d4ac2b7842421a24946e6_large.jpg'),
(46, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__5__2bdf05422820415d82c3b5b801031289_large.jpg'),
(47, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__6__38250fc558334d63a166a903a9766524_large.jpg'),
(48, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__3__6b5fbd5f1b3f453295133047489ae0b6_large.jpg'),
(49, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(50, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(51, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(52, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(53, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(54, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(55, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__10__c98c2c53dce9424c89564942dd025994_large.jpg'),
(56, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__5__bbd7e496d4fb41cf99374253aeb02f8a_large.jpg'),
(57, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__4__e1d90a0320a84c13b93c15c0c64bd5a5_large.jpg'),
(58, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__8__2587e016ea3e42a183e7fd0555748be2_large.jpg'),
(59, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__6__dd211a89a7504e0b9f041054125d5220_large.jpg'),
(60, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__7__0bc44560d36f4200ab2d622f377808d6_large.jpg'),
(61, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(62, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(63, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(64, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(65, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(66, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(67, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg5_33e7f27a9bc54f0eb9864024793fe512_large.jpg'),
(68, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg4_db8448bea7a24a2a822da4969a16e98c_large.jpg'),
(69, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg10_b5a4a743d75e4e5f9661d30b69adf7d2_large.jpg'),
(70, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg7_093494f60e4d4587bbbfa93658e38bb3_large.jpg'),
(71, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg3_e24572cd44f144e1bfc2f73a819d664c_large.jpg'),
(72, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg8_b5a1c870522443e5930ed7f7e38cba67_large.jpg'),
(73, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__6__dbe18d85821f4643b38cbd3fce1d2bd7_large.jpg'),
(74, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__10__2d270cee81d44d4ab768d7861a452fd7_large.jpg'),
(75, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__5__bf842a58d3a54b93857c9e47e8746999_large.jpg'),
(76, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__4__b0f6011dac6040c494806166d875dd12_large.jpg'),
(77, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__7__8b9af68760174da5a319d39877f95156_large.jpg'),
(78, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__8__0779d94f843e4969892d8b012921c677_large.jpg'),
(79, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-44wku-color-cam_9508ea8371684fcaa09ac74fa5ecb6da_large.jpg'),
(80, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-a3del-color-cam_dc9795c4a4ab4ed9ae8fd3f4cc23bf79_large.jpg'),
(81, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-za0yv-color-cam_3c66a580b8d64dd29b3ec149ac932916_large.jpg'),
(82, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-qupje-color-cam_f97ec97e515c4094a6c497f8f2cad933_large.jpg'),
(83, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-black-dswh08300den-den-xd3z1-color-den_28ba4c3fb40948a7a0020be6276c7123_large.jpg'),
(84, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-black-dswh08300den-den-ye3e8-color-den_53c4eef3a3074f6fae93e19525a6fbae_large.jpg'),
(85, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam10_82cc3c44d6e545e6aececd3df4ff04da_large.jpg'),
(86, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam5_b91b4c2359b743e88cfd3781935d2aaa_large.jpg'),
(87, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam4_065bf1695fc6497c8241ce154e6a8799_large.jpg'),
(88, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam6_4b91c5e37585492f825525802e08c5c9_large.jpg'),
(89, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam7_52d5103795224652a5bc7e736004c9eb_large.jpg'),
(90, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam3_c1ed99c8ad3849b88808c9c46d884a47_large.jpg'),
(91, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__10__cd1e44f68fbb447a9ab2ff1bff7ca66c_large.jpg'),
(92, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__5__15363fba742b44b581f2522c16fa08eb_large.jpg'),
(93, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__4__25a3821ebc5b4d40a90b280bd6ec15d7_large.jpg'),
(94, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__8__88cf705548404d20a7db1c675ce5a6ee_large.jpg'),
(95, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__3__ebc9392f858f404f9e73806de148b89e_large.jpg'),
(96, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__6__3c338ff2744e4f01b3f377310784cab6_large.jpg'),
(97, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__4__09dc05a4c81e496e8b0a173d77220800_large.jpg'),
(98, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__5__10c811cb9be441459b8388bfb247a4e6_large.jpg'),
(99, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__6__beb8c624b64c4843a2d2ea3389f34af6_large.jpg'),
(100, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__10__74cd96a1255f4cf0a58305bcafff29c8_large.jpg'),
(101, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__3__eac7d5645ebb4eac97be6f74bc8b9bc1_large.jpg'),
(102, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__7__9ece3c4c11be47849e8c11d1206ea9dd_large.jpg'),
(103, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(104, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(105, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(106, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(107, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(108, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(109, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__4__09960109e9b14c4d8de5042a01a422a3_large.jpg'),
(110, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__5__4b273d16f94d4a5f8e370ba665405aaa_large.jpg'),
(111, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__6__18079d0865c5461ab8b9d564e2f69258_large.jpg'),
(112, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__10__2c8f594b5b204af6b18f7b33034e185a_large.jpg'),
(113, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__7__26e827265f2a4dca88fda7779ffc24e9_large.jpg'),
(114, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__3__c0dbe6a1e022444b93d05542b3d9e3b0_large.jpg'),
(115, 20, 'https://product.hstatic.net/1000230642/product/ttn_6845_fa41016b09714c1ba0cd28cfc7998327_large.jpg'),
(116, 20, 'https://product.hstatic.net/1000230642/product/ttn_6846_3300aa6a1c3740d9b64f2314498b1b88_large.jpg'),
(117, 20, 'https://product.hstatic.net/1000230642/product/ttn_6847_ac2d0d24a6174353863113c072acb0e0_large.jpg'),
(118, 20, 'https://product.hstatic.net/1000230642/product/ttn_6848_bdedb42a6d9f4df4bfd9b42634383c28_large.jpg'),
(119, 20, 'https://product.hstatic.net/1000230642/product/ttn_6849_ae1f530e71f24a0ea487ca2ea41c3592_large.jpg'),
(120, 20, 'https://product.hstatic.net/1000230642/product/ttn_6850_3e55c75f5d8744e7b7eb042c6421792a_large.jpg'),
(121, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__10__f6104e6cd9e549049a65ed2af209042f_large.jpg'),
(122, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__5__64b7be96e2384775b103f45433419e92_large.jpg'),
(123, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__4__6f8bf72165814940a14b996d8667be85_large.jpg'),
(124, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__8__c6c1afb5a0824f49b3997e989304e213_large.jpg'),
(125, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__6__d129e67dafc54610b9142e4ac3a4ffb4_large.jpg'),
(126, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__7__a678ef9b3c574028ba0eb9e4aba6f150_large.jpg'),
(127, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__5__27af10f8b3f2441b9b39589e37a788b4_large.jpg'),
(128, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__6__49353a2cdd304bcb8edddb3dad2099e2_large.jpg'),
(129, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__10__cc3af31fab2b47e8874edc58dd35c50a_large.jpg'),
(130, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__3__548c7541f99446048d53f1890a196952_large.jpg'),
(131, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__7__b926c044172146209478f9f3ae95f6da_large.jpg'),
(132, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__8__cbeea712c323469da1dfdf2fc92f91a6_large.jpg'),
(133, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__3__ece61c35e1584849a9ff62e5b2fb4718_large.jpg'),
(134, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__4__f7a78da122ed45eca6ec65e1ce23d20d_large.jpg'),
(135, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__5__5c8e3d5af5ab45288e2d73a81f2a4f09_large.jpg'),
(136, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__6__c51881bd771f4715b7e4f7751cfb9c6e_large.jpg'),
(137, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__7__8a19f73c8f4a471399408ec508e63ab2_large.jpg'),
(138, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__8__d139a993522d4989b2c37d610eea820a_large.jpg'),
(139, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-cz9u6-color-cam_d47f2083e52246e78936c13635394aa3_large.jpg'),
(140, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-k1fsf-color-cam_00524debd2c8464abe06b84cc2da5651_large.jpg'),
(141, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-qfaaj-color-cam_b4dbc5aca30e4bc2a5d618a23466fcdf_large.jpg'),
(142, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-cz9u6-color-cam_d47f2083e52246e78936c13635394aa3_large.jpg'),
(143, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-k1fsf-color-cam_00524debd2c8464abe06b84cc2da5651_large.jpg'),
(144, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-qfaaj-color-cam_b4dbc5aca30e4bc2a5d618a23466fcdf_large.jpg');

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
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subimage`
--
ALTER TABLE `subimage`
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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `subimage`
--
ALTER TABLE `subimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

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
