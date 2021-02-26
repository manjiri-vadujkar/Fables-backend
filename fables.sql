-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2021 at 07:03 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fables`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `bookId` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`bookId`, `bookname`, `genre`, `author`, `summary`, `type`) VALUES
('1', 'Adventures of Pinocchio ', 'Children', 'Carlo Collodi', 'The Adventures of Pinocchio is a novel for children by Italian author Carlo Collodi (here transl. by Carol della Chiesa). The first half was published in serial form between 1881 and 1883, and then completed as a book for children in February 1883. It is about the mischievous adventures of Pinocchio, an animated marionette, and his poor father, a woodcarver named Geppetto. It is considered a classic of children’s literature and has spawned many derivative works of art, such as Disney’s classic 1940 animated movie of the same name, and commonplace ideas, such as a liar’s long nose.', 0),
('10', 'Dracula', 'Horror', 'Bram Stoker', 'The classic vampire story by Bram Stoker revolves around a struggle between good and evil, tradition and modernity, and lust versus chastity. The author didn’t invent vampires, but his novel has so captured the public’s imagination that he is rightly considered their popularizer. Listen and you will meet not only the Count himself, but heroes Jonathan Harker and Abraham Van Helsing, plus an array of madmen, psychiatrists, and fair maidens who cross paths with the fanged menace.', 0),
('2', 'Alice\'s adventures in wonderland', 'Children', 'Lewis Caroll', 'In this children\'s classic, a girl named Alice follows falls down a rabbit-hole into a fantasy realm full of talking creatures. She attends a never-ending tea party and plays croquet at the court of the anthropomorphic playing cards.', 0),
('3', 'Adventures of Sherlock Holmes', 'Crime & Mystery\r\n', 'Sir Arthur Conon Doyle', 'The Adventures of Sherlock Holmes is a collection of twelve stories by Arthur Conan Doyle, featuring his famous detective. They were originally published in the Strand Magazine from July 1891 to June 1892. The title character was named after famous American poet Oliver Wendell Holmes, Sr.', 0),
('4', 'The Breaking Point', 'Crime & Mystery', 'Mary Roberts Rinehart', 'Mary Roberts Rinehart -- \"America\'s Agatha Christie,\" as she used to be called -- set this story in a New York suburban town, shortly after the end of the first world war. Dick Livingstone is a young, successful doctor, who in the course of events becomes engaged to Elizabeth Wheeler. But there is a mystery about his past, and he thinks himself honor-bound to unravel it before giving himself to her in marriage. In particular, a shock of undetermined origin has wiped out his memory prior to roughly the last decade. Rinehart, who presumably had been reading, or reading about, the then popular Sigmund Freud, plays on what today is called \"repressed memory,\" as she takes Dick into his past, and into the dangers that, unknown to him, lurk there. Is she correct about the behavior of memory? Who knows? After all, this is not a clinical treatise, but a work of fiction, one of the thrillers that made her such a popular writer of the earlier twentieth century.', 0),
('5', 'The Man Who Would Be King', 'Adventure', 'Rudyard Kipling', 'The Man Who Would Be King tells the story of two British adventurers in British India who become kings of Kafiristan, a remote part of Afghanistan. It was inspired by the exploits of James Brooke, an Englishman who became the \"white Raja\" of Sarawak in Borneo, and by the travels of American adventurer Josiah Harlan, who claimed the title Prince of Ghor.', 0),
('6', 'The Son of Tarzan', 'Adventure', 'Edgar Rice Burroughs', 'Alexis Paulvitch, a henchman of Tarzan\'s now-deceased enemy, Nikolas Rokoff, survived his encounter with Tarzan in the third novel and wants to even the score. ', 0),
('7', 'A Traveler in Time', 'Science Fiction', 'August Derleth', 'A Traveler in Time is a short story by August Derleth written in 1953 featuring newspaperman Tex Harrigan. In the story, Tex tells about the time he interviewed a man that claimed that he had invented a time machine. The story is entertaining, a fun quick read.', 0),
('8', 'A Journey to the Centre', 'Science Fiction', 'Jules Verne', 'The story involves a German professor (Otto Lidenbrock in the original French, Professor Von Hardwigg in the most common English translation) who believes there are volcanic tubes going toward the center of the Earth. He, his nephew Axel (Harry), and their guide Hans encounter many adventures, including prehistoric animals and natural hazards, eventually coming to the surface again in southern Italy.', 0),
('9', 'Grim Tales', 'Horror', 'E. Nesbit', 'A collection of gentle stories that draw us into that hidden world where fear is just around the next corner, and where loving hands can touch across the boundaries of death.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `bookchpt`
--

CREATE TABLE `bookchpt` (
  `srno` int(11) NOT NULL,
  `bookId` varchar(255) NOT NULL,
  `chptname` varchar(255) NOT NULL,
  `chptref` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookchpt`
--

INSERT INTO `bookchpt` (`srno`, `bookId`, `chptname`, `chptref`) VALUES
(1, '1', 'Chapter1', 'https://www.google.com/'),
(2, '1', 'Chapter2', 'https://www.google.com/'),
(3, '1', 'Chapter3', 'https://www.google.com/'),
(4, '2', 'Chapter1', 'https://www.google.com/'),
(5, '2', 'Chapter2', 'https://www.google.com/'),
(6, '3', 'Chapter1', 'https://www.google.com/'),
(7, '3', 'Chapter2', 'https://www.google.com/'),
(8, '4', 'Chapter1', 'https://www.google.com/'),
(9, '4', 'Chapter2', 'https://www.google.com/'),
(10, '4', 'Chapter3', 'https://www.google.com/'),
(11, '5', 'Chapter1', 'https://www.google.com/'),
(12, '5', 'Chapter2', 'https://www.google.com/'),
(13, '6', 'Chapter1', 'https://www.google.com/'),
(14, '6', 'Chapter2', 'https://www.google.com/'),
(15, '6', 'Chapter3', 'https://www.google.com/'),
(16, '7', 'Chapter1', 'https://www.google.com/'),
(17, '7', 'Chapter2', 'https://www.google.com/'),
(18, '8', 'Chapter1', 'https://www.google.com/'),
(19, '8', 'Chapter2', 'https://www.google.com/'),
(20, '8', 'Chapter3', 'https://www.google.com/'),
(21, '9', 'Chapter1', 'https://www.google.com/'),
(22, '9', 'Chapter2', 'https://www.google.com/'),
(23, '10', 'Chapter1', 'https://www.google.com/'),
(24, '10', 'Chapter2', 'https://www.google.com/');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `subscription` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `name`, `email`, `password`, `subscription`) VALUES
('5a3557f6-2577-4386-b907-312f71d5ac29', 'Castiel Novak', 'cas07@gmail.com', '$2b$10$XSMF9l0yxvF83v06N3GE5OyPquENjodod5foiGkj3sb.u8UJn03Km', 0),
('74430c3d-b291-4518-bca8-7f0b5a12365e', 'Ellen Jones', 'ellen5@gmail.com', '$2b$10$s/wiNUNERqXiUq2X5bW/HutkTYZ.n9OXUXksqy7yWoXt81X.9OLjC', 0),
('c4978b00-7221-4e40-9ae7-0cd3c83c2fb8', 'John Doe', 'johndoe@gmail.com', '$2b$10$3GV96hmygNdJXkupZU4QROHQhOHJvML1zeD2lWgoR7rV.MoXgyLHK', 0);

-- --------------------------------------------------------

--
-- Table structure for table `userfav`
--

CREATE TABLE `userfav` (
  `srno` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `bookId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userread`
--

CREATE TABLE `userread` (
  `srno` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `bookId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userrecommend`
--

CREATE TABLE `userrecommend` (
  `srno` int(11) NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8 NOT NULL,
  `bookId` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`bookId`);

--
-- Indexes for table `bookchpt`
--
ALTER TABLE `bookchpt`
  ADD PRIMARY KEY (`srno`),
  ADD KEY `bookId` (`bookId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `userfav`
--
ALTER TABLE `userfav`
  ADD PRIMARY KEY (`srno`),
  ADD KEY `bookId` (`bookId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userread`
--
ALTER TABLE `userread`
  ADD PRIMARY KEY (`srno`),
  ADD KEY `bookId` (`bookId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userrecommend`
--
ALTER TABLE `userrecommend`
  ADD PRIMARY KEY (`srno`),
  ADD KEY `bookId` (`bookId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookchpt`
--
ALTER TABLE `bookchpt`
  MODIFY `srno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `userfav`
--
ALTER TABLE `userfav`
  MODIFY `srno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userread`
--
ALTER TABLE `userread`
  MODIFY `srno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userrecommend`
--
ALTER TABLE `userrecommend`
  MODIFY `srno` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookchpt`
--
ALTER TABLE `bookchpt`
  ADD CONSTRAINT `bookchpt_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`);

--
-- Constraints for table `userfav`
--
ALTER TABLE `userfav`
  ADD CONSTRAINT `userfav_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`),
  ADD CONSTRAINT `userfav_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `userread`
--
ALTER TABLE `userread`
  ADD CONSTRAINT `userread_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`),
  ADD CONSTRAINT `userread_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `userrecommend`
--
ALTER TABLE `userrecommend`
  ADD CONSTRAINT `userrecommend_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `book` (`bookId`),
  ADD CONSTRAINT `userrecommend_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
