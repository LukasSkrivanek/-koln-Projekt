-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2022 at 01:18 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cookbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_ca` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id_ca`, `name`) VALUES
(1, 'Anglická snídaně'),
(2, 'Teplá snídaně'),
(3, 'Jednoduchá snídaně'),
(4, 'Kontinentální snídaně');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id_co` int(11) NOT NULL,
  `author` int(11) DEFAULT NULL,
  `recipe` int(11) DEFAULT NULL,
  `content` varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id_in` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id_in`, `name`) VALUES
(1, 'Voda'),
(2, 'Pepř'),
(3, 'Paprika'),
(5, 'Sůl'),
(6, 'Mléko');

-- --------------------------------------------------------

--
-- Table structure for table `ing_uni`
--

CREATE TABLE `ing_uni` (
  `id_in` int(11) DEFAULT NULL,
  `id_mu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ing_uni`
--

INSERT INTO `ing_uni` (`id_in`, `id_mu`) VALUES
(6, 4),
(6, 1),
(3, 3),
(3, 2),
(2, 3),
(2, 2),
(1, 3),
(1, 2),
(5, 4),
(5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `measure_units`
--

CREATE TABLE `measure_units` (
  `id_mu` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `measure_units`
--

INSERT INTO `measure_units` (`id_mu`, `name`) VALUES
(1, 'ml'),
(2, 'mg'),
(3, 'g'),
(4, 'l');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id_ra` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `isLike` tinyint(1) NOT NULL,
  `recipe` int(11) DEFAULT NULL,
  `author` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id_re` int(11) NOT NULL,
  `title` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(2048) COLLATE utf8_unicode_ci NOT NULL,
  `process` varchar(4096) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `portions` int(11) NOT NULL,
  `estimatedTime` int(11) NOT NULL,
  `estimatedPrice` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `category` int(11) DEFAULT NULL,
  `author` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id_re`, `title`, `description`, `process`, `image`, `portions`, `estimatedTime`, `estimatedPrice`, `createdAt`, `category`, `author`) VALUES
(4, 'Recept 1', 'Jen takový recept', 'Prostě to uvař', 'https://ms1.ostium.cz/instance/WrhA7R/h389w574t.jpg', 4, 30, 300, '2022-05-03 14:21:58', 1, 1),
(5, 'Recept 2', 'Jen', 'Prostě to uvař', '', 4, 30, 300, '2022-05-03 15:35:23', 1, 1),
(6, 'Recept 3', 'Ideální osvěžení v parných dnech? Samozřejmě zmrzlina a nejlépe ta domácí! Vyzkoušejte oblíbenou pistáciovou. Čistě přírodní, lahodná a s kousky pistácií potěší i náročnější mlsné jazýčky.', 'Prostě to uvař', 'https://ms1.ostium.cz/instance/web-recepty/jLWrhA7R/h389w574t.jpg', 4, 30, 300, '2022-05-03 15:35:23', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rec_ing`
--

CREATE TABLE `rec_ing` (
  `id_re` int(11) DEFAULT NULL,
  `id_in` int(11) DEFAULT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `measure_unit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_ro` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_ro`, `name`) VALUES
(1, 'admin'),
(2, 'editor'),
(3, 'člen'),
(4, 'majitel');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_u` int(11) NOT NULL,
  `username` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `firstName` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `role` int(11) DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_u`, `username`, `email`, `firstName`, `lastName`, `password`, `created`, `role`) VALUES
(1, 'ond', 'o@k.cz', 'Ondřej', 'Koriťák', '123', '2022-04-21 10:53:19', 4),
(14, 'n', 'o@k.cz', 'FName', 'LName', '5f4dcc3b5aa765d61d8327deb882cf99', '2022-04-22 10:57:35', 3),
(16, 'daw', '@daw', 'daw', 'daw', '62c52aed95d425206ff175be00a3a6af', '2022-04-22 11:09:45', 3),
(17, 'n', 'o@k.cz', 'FName', 'LName', '5f4dcc3b5aa765d61d8327deb882cf99', '2022-05-03 14:14:23', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_ca`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id_co`),
  ADD KEY `recipe` (`recipe`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id_in`);

--
-- Indexes for table `ing_uni`
--
ALTER TABLE `ing_uni`
  ADD KEY `id_in` (`id_in`),
  ADD KEY `id_mu` (`id_mu`);

--
-- Indexes for table `measure_units`
--
ALTER TABLE `measure_units`
  ADD PRIMARY KEY (`id_mu`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id_ra`),
  ADD KEY `recipe` (`recipe`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id_re`),
  ADD KEY `category` (`category`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `rec_ing`
--
ALTER TABLE `rec_ing`
  ADD KEY `id_re` (`id_re`),
  ADD KEY `id_in` (`id_in`),
  ADD KEY `measure_unit` (`measure_unit`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_ro`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_u`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_ca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id_in` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `measure_units`
--
ALTER TABLE `measure_units`
  MODIFY `id_mu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id_ra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id_re` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_ro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id_re`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`author`) REFERENCES `users` (`id_u`);

--
-- Constraints for table `ing_uni`
--
ALTER TABLE `ing_uni`
  ADD CONSTRAINT `ing_uni_ibfk_1` FOREIGN KEY (`id_in`) REFERENCES `ingredients` (`id_in`),
  ADD CONSTRAINT `ing_uni_ibfk_2` FOREIGN KEY (`id_mu`) REFERENCES `measure_units` (`id_mu`);

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id_re`),
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`author`) REFERENCES `users` (`id_u`);

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `recipes_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id_ca`),
  ADD CONSTRAINT `recipes_ibfk_2` FOREIGN KEY (`author`) REFERENCES `users` (`id_u`);

--
-- Constraints for table `rec_ing`
--
ALTER TABLE `rec_ing`
  ADD CONSTRAINT `rec_ing_ibfk_1` FOREIGN KEY (`id_re`) REFERENCES `recipes` (`id_re`),
  ADD CONSTRAINT `rec_ing_ibfk_2` FOREIGN KEY (`id_in`) REFERENCES `ingredients` (`id_in`),
  ADD CONSTRAINT `rec_ing_ibfk_3` FOREIGN KEY (`measure_unit`) REFERENCES `measure_units` (`id_mu`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id_ro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
