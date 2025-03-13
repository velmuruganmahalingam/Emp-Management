-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `role` enum('SuperAdmin','Admin','User') NOT NULL DEFAULT 'User',
  `country` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Emily Johnson','Dooley, Kozey and Cronin','User','United States','2025-03-12 11:21:15'),(3,'Sophia Brown','Schiller - Zieme','User','Greenland','2025-03-12 11:21:15'),(4,'James Davis','Pagac and Sons','User','United States','2025-03-12 11:21:15'),(5,'Emma Miller','Graham - Gulgowski','User','United States','2025-03-12 11:21:15'),(6,'Olivia Wilson','Pfannerstill Inc','User','United States','2025-03-12 11:21:15'),(7,'Alexander Jones','Dickens - Beahan','User','United States','2025-03-12 11:21:15'),(8,'Ava Taylor','Nikolaus Inc','User','United States','2025-03-12 11:21:15'),(9,'Ethan Martinez','Gorczany - Gottlieb','User','United States','2025-03-12 11:21:15'),(10,'Isabella Anderson','Pollich - Hilpert','User','United States','2025-03-12 11:21:15'),(11,'Liam Garcia','Considine - Torp','User','United States','2025-03-12 11:21:15'),(12,'Mia Rodriguez','Miller, Schowalter and Wisozk','User','United States','2025-03-12 11:21:15'),(13,'Noah Hernandez','Botsford, Marquardt and Roberts','User','United States','2025-03-12 11:21:15'),(14,'Charlotte Lopez','Zulauf and Sons','User','United States','2025-03-12 11:21:15'),(15,'William Gonzalez','Spinka - Dickinson','User','United States','2025-03-12 11:21:15'),(16,'Avery Perez','Herzog Inc','User','United States','2025-03-12 11:21:15'),(17,'Evelyn Sanchez','Predovic - Johns','User','United States','2025-03-12 11:21:15'),(18,'Logan Torres','Jast - Nader','User','United States','2025-03-12 11:21:15'),(19,'Abigail Rivera','Prohaska - Thiel','User','United States','2025-03-12 11:21:15'),(20,'Jackson Evans','Kuhlman LLC','User','United States','2025-03-12 11:21:15'),(21,'Madison Collins','Mayer - Smitham','User','United States','2025-03-12 11:21:15'),(22,'Elijah Stewart','Langworth Group','User','United States','2025-03-12 11:21:15'),(23,'Chloe Morales','Grady LLC','User','United States','2025-03-12 11:21:15'),(24,'Mateo Nguyen','Spinka LLC','User','United States','2025-03-12 11:21:15'),(25,'Harper Kelly','Leffler, Rolfson and Becker','User','United States','2025-03-12 11:21:15'),(26,'Evelyn Gonzalez','Tromp, Gaylord and Weber','User','United States','2025-03-12 11:21:15'),(27,'Daniel Cook','Morissette, Baumbach and Auer','User','United States','2025-03-12 11:21:15'),(28,'Lily Lee','Cremin Inc','User','United States','2025-03-12 11:21:15'),(29,'Henry Hill','Gerlach, Funk and Schoen','User','United States','2025-03-12 11:21:15'),(30,'Addison Wright','Kreiger Inc','User','United States','2025-03-12 11:21:15'),(31,'Emma Hudson','Dickens - peahens','User','United States','2025-03-12 17:41:43'),(32,'Emma Hudson','Dicken - Beahen','User','United States','2025-03-12 17:52:07'),(33,'Agatha George','Pagac and Sons','User','France','2025-03-13 08:30:36'),(34,'Barak Obama','Dooley, Kozey and Cronin','User','United States','2025-03-13 08:38:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-13 15:23:40
