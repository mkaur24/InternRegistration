-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 23, 2019 at 10:51 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `InternReg`
--

-- --------------------------------------------------------

--
-- Table structure for table `interns`
--

CREATE TABLE `interns` (
  `internid` int(4) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `branch` varchar(30) NOT NULL,
  `projname` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interns`
--

INSERT INTO `interns` (`internid`, `fullname`, `address`, `branch`, `projname`) VALUES
(1, 'Ishmeet Kaur', 'Bhandup', 'IT', ', Medi, Football Registration'),
(2, 'Simar', 'Kurla', 'Mech', ', GST'),
(3, 'Inder', 'Chembur', 'Comp', ', Intern Registration'),
(4, 'Amrit', 'Kurla', 'IT', ', Intern Registration'),
(5, 'Keerat', 'Bhandup', 'Biomedical', ', Medi, Tally'),
(6, 'Malkeet', 'Chembur', 'Comps', ', Football Registration');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `fullname` varchar(50) NOT NULL,
  `projname` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`fullname`, `projname`) VALUES
('Ishmeet Kaur', 'Medi'),
('Inder', 'Intern Registration'),
('Keerat', 'Medi'),
('Keerat', 'Tally'),
('Amrit', 'Intern Registration'),
('Malkeet', 'Football Registration'),
('Ishmeet Kaur', 'Football Registration'),
('Simar', 'GST');

--
-- Triggers `list`
--
DELIMITER $$
CREATE TRIGGER `intern` AFTER INSERT ON `list` FOR EACH ROW update interns set projname= concat(projname,", ",new.projname) where fullname= new.fullname
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `project` AFTER INSERT ON `list` FOR EACH ROW update projects set fullname= concat(fullname,", ",new.fullname) where projname= new.projname
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `projid` int(11) NOT NULL,
  `projname` varchar(150) NOT NULL,
  `domaintype` varchar(10) NOT NULL,
  `fullname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`projid`, `projname`, `domaintype`, `fullname`) VALUES
(2, 'Medi', 'Health', ', Ishmeet Kaur, Keerat'),
(3, 'Intern Registration', 'Network', ', Inder, Amrit'),
(4, 'Tally', 'Finance', ', Keerat'),
(5, 'Football Registration', 'Network', ', Malkeet, Ishmeet Kaur'),
(6, 'GST', 'Finance', ', Simar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `interns`
--
ALTER TABLE `interns`
  ADD PRIMARY KEY (`internid`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`projid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `interns`
--
ALTER TABLE `interns`
  MODIFY `internid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `projid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
