-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 02:31 PM
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
(4, 'Kontinentální snídaně'),
(5, 'Dezerty');

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
(6, 'Mléko'),
(9, 'Banány'),
(10, 'Ovesné vločky'),
(11, 'Kokos'),
(12, 'Vajíčka'),
(13, 'Bílý jogurt'),
(14, 'Kypřící prášek do pečiva'),
(15, 'Skořice'),
(16, 'Olej na smažení'),
(17, 'Maliny'),
(18, 'Javorový sirup'),
(19, 'Datle'),
(20, 'Kešu ořechy'),
(21, 'Raw kakaa'),
(22, 'Med'),
(23, 'Olej'),
(24, 'Červená cibule'),
(25, 'Česnek'),
(26, 'Paprika'),
(27, 'Chilli paprička'),
(28, 'Rajče'),
(29, 'Rajčatové pyré'),
(30, 'Červené fazole'),
(31, 'Římský kmín'),
(32, 'Cukr'),
(33, 'Koriandr'),
(34, 'Sýr');

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
(4, 'l'),
(5, 'ks'),
(6, 'lžíce'),
(7, 'velká lžíce'),
(8, 'lžičky'),
(9, 'hrst'),
(10, 'špetka'),
(11, 'hrnek');

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
(35, 'Banánové lívance', 'Tak tenhle recept, to je u nás poslední dobou fakt hit. Miuška je totiž miluje a je schopná jich sníst opravdu hodně. Víceméně celou tuhle dávku sní během dvou dnů většinou sama. Dělám je často na cesty, protože s nima nedělá velkej bordel a je to jistota. Určitě to není ale recept jenom pro děti. Mně chutnají taky moc a navíc jsou bez cukru (až na trochu sirupu v malinách, který ale ne vždycky dělám) a místo mouky jsou tam vločky.', 'Všechny ingredience na lívance vložím do mixéru a promixuju v hladký kompaktní těsto. Pokud používám zralý banány, což doporučuju bude těsto tak akorát sladký. Nemělo by být moc řídký, ale ani úplně hutný. Mělo by se jen lehce rozlít na pánvi. Pokud bude hodně řídký, přidám klidně ještě vločky a znovu promixuju, pokud hodně hustý, přidám vodu nebo mléko.\n\nNa pánvi si na středním plameni rozpálím trochu kokosovýho oleje a lívanečky opékám z obou stran dozlatova. Je to celkem rychlý, tak pozor, ať se nepřipálí.\n\nZmražený nebo čerstvý maliny dám do kastrůlku (pokud použijeme čerstvý, podliju je jen trochu vodou), přidám javorový sirup a nechám společně tak deset minut probublat. Hotový lívance namažu oblíbenou marmeládou nebo ořechovým máslem, naskládám na sebe, přeliju ovocným rozvarem a podávám. ', 'https://www.mycookingdiary.cz/wp-content/uploads/2021/01/p9106630-1080x810.jpg', 10, 21, 300, '2022-05-26 14:15:16', 1, 1),
(36, 'Raw brownies', 'Raw dort měl u vás velkej úspěch, tak jsem se rozhodla zveřejnit další raw recept. Tentokrát je to brownies, který vlastně není nic jinýho, než takovej větší korpus toho dortu. Mně chutnalo moc a byla jsem překvapená, že i Adam ho snědl s chutí. Akorát pak skoro nechtěl večeři, jak je to sytý. Skvělý je na snídani, ale hlavně na svačinu. Dodá fakt hodně energie, takže do práce nebo do školy ideální.', 'Nejdřív jsem v robotu rozmixovala kešu ořechy a teprve pak jsem k nim přidala zbylý ingredience. Mixovala jsem do tý doby, než jsem neměla jednotnou hmotu. Do formy (přibližně 25×15 cm – brownies by mělo být vysoké tak 2 cm) jsem si pak dala pečící papír a na něj jsem urovnala rukama připravenou směs. Jde to trošku ztuha, tak se musí malinko zabrat. Takhle připravenou směs jsem ještě posypala drcenejma kešu oříškama a dala jsem na hodinu do mrazáku. Pokud nemáte formu, která může do mrazáku, pečící papír se směsí z formy vyndejte a dejte na nějakou podložku – třeba prkýnko. Před podáváním jsem nechala brownies trochu povolit a posypala jsem ho granátovým jablkem.', 'https://www.mycookingdiary.cz/wp-content/uploads/2016/03/p3060673-960x720.jpg', 1, 30, 250, '2022-05-26 14:19:37', 5, 1),
(37, 'Huevos rancheros', 'Pokud máte rádi mexickou kuchyni, tak byste určitě měli vyzkoušet i jejich snídaně. Tyhle rančerský vejce jsou příklad, jak taková mexická snídaně může vypadat. Pro někoho je možná nepředstavitelný, že si dá po ránu něco ostrýho, ale fakt to člověka nakopne. A pokud ostrý zrovna nemusíte, tak to chilli vynechte. I když mně to přijde jako věčná škoda, protože je to dost zdravý…', 'Cibuli jsem nakrájela na kolečka, česnek na plátky, očištěnou papriku na větší kostky, rajčata na menší kostky a chilli na kolečka (množství a druh dávejte podle sebe). Cibuli a papriku jsem opékala asi pět minut na oleji, pak jsem přidala česnek, chilli, římský kmín a pokračovala jsem ještě další minutu. Směs jsem zalila rajčatovým pyré, přidala jsem čerstvý rajčata, fazole, sůl a pepř. Všechno jsem promíchala, přiklopila pokličkou a dusila pět minut. V tuhle chvíli máte poslední možnost směs dochutit a promíchat. Pokud vám přijde směs kyselá, přidejte trochu cukru. Lžící jsem pak vytvořila ve směsi důlek a do toho jsem rozklepla vejce. Dávejte pozor, ať vám tam nespadne skořápka. Proces jsem opakovala čtyřikrát a pak jsem zase pánev přiklopila pokličkou a nechala asi čtyři minuty dusit. Bílek musí bejt uvařenej a žloutek by měl zůstat tekutej. Nakoukněte proto občas pod pokličku a sledujte, jak na tom vejce je. Hotový vejce podávejte buď s tortillou nebo klasickým pečivem a zdobte čerstvým koriandrem a sýrem. Pro masožrouty doporučuju přidat do základu slaninu nebo nějakou klobásku.', 'https://www.mycookingdiary.cz/wp-content/uploads/2015/10/1-960x720.jpg', 1, 45, 500, '2022-05-26 14:31:02', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rec_ing`
--

CREATE TABLE `rec_ing` (
  `id_re` int(11) DEFAULT NULL,
  `id_in` int(11) DEFAULT NULL,
  `ing_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `number` int(11) NOT NULL,
  `measure_unit` int(11) DEFAULT NULL,
  `unit_name` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `rec_ing`
--

INSERT INTO `rec_ing` (`id_re`, `id_in`, `ing_name`, `number`, `measure_unit`, `unit_name`) VALUES
(35, 9, 'Banány', 2, 5, 'ks'),
(35, 10, 'Ovesné vločky', 4, 6, 'lžíce'),
(35, 11, 'Kokos', 2, 6, 'lžíce'),
(35, 12, 'Vajíčka', 3, 5, 'ks'),
(35, 13, 'Bílý jogurt', 1, 7, 'velká lžíce'),
(35, 14, 'Kypřící prášek do pečiva', 1, 8, 'lžičky'),
(35, 15, 'Skořice', 1, 8, 'lžičky'),
(35, 16, 'Olej na smažení', 10, 1, 'ml'),
(35, 17, 'Maliny', 2, 9, 'hrst'),
(35, 18, 'Javorový sirup', 1, 6, 'lžíce'),
(35, 5, 'Sůl', 1, 10, 'špetka'),
(36, 19, 'Datle', 2, 11, 'hrnek'),
(36, 20, 'Kešu ořechy', 1, 11, 'hrnek'),
(36, 21, 'Raw kakaa', 3, 6, 'lžíce'),
(36, 11, 'Kokos', 2, 6, 'lžíce'),
(36, 22, 'Med', 2, 8, 'lžičky'),
(37, 23, 'Olej', 2, 6, 'lžíce'),
(37, 24, 'Červená cibule', 1, 5, 'ks'),
(37, 25, 'Česnek', 1, 5, 'ks'),
(37, 26, 'Paprika', 1, 5, 'ks'),
(37, 27, 'Chilli paprička', 1, 5, 'ks'),
(37, 28, 'Rajče', 2, 5, 'ks'),
(37, 29, 'Rajčatové pyré', 200, 3, 'g'),
(37, 30, 'Červené fazole', 3, 6, 'lžíce'),
(37, 12, 'Vajíčka', 4, 5, 'ks'),
(37, 31, 'Římský kmín', 1, 8, 'lžičky'),
(37, 5, 'Sůl', 5, 2, 'mg'),
(37, 2, 'Pepř', 5, 2, 'mg'),
(37, 32, 'Cukr', 10, 2, 'mg'),
(37, 33, 'Koriandr', 15, 2, 'mg'),
(37, 34, 'Sýr', 50, 3, 'g');

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
  MODIFY `id_ca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id_in` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `measure_units`
--
ALTER TABLE `measure_units`
  MODIFY `id_mu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id_ra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id_re` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
