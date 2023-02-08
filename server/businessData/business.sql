-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 08 2023 г., 10:21
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `business`
--

-- --------------------------------------------------------

--
-- Структура таблицы `reports`
--

CREATE TABLE `reports` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `revenue` int NOT NULL,
  `cash` int NOT NULL,
  `cashless` int NOT NULL,
  `creditСards` int NOT NULL,
  `averageСheck` int NOT NULL,
  `averageGuest` int NOT NULL,
  `deletionFromCheck` int NOT NULL,
  `deletionFromBill` int NOT NULL,
  `checks` int NOT NULL,
  `guests` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `reports`
--

INSERT INTO `reports` (`id`, `date`, `revenue`, `cash`, `cashless`, `creditСards`, `averageСheck`, `averageGuest`, `deletionFromCheck`, `deletionFromBill`, `checks`, `guests`) VALUES
(1, '2001-02-20', 500000, 300000, 200000, 3235354, 3453, 34535, 6564, 454, 44, 33),
(2, '2001-02-21', 500056, 343454, 200000, 234555, 3453, 346, 5465, 4535, 56, 55),
(3, '2001-02-22', 234234, 1234234, 34534, 34534, 3454, 77, 5656, 99, 78, 67),
(4, '2001-02-23', 98788678, 78678, 678678, 6578868, 8678, 9789, 6786, 999, 99, 99),
(5, '2001-02-24', 876867, 5756, 867868, 7575, 567, 6788, 6768, 8979, 56, 34);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
