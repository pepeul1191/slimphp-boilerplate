-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: competition
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branch_types`
--

DROP TABLE IF EXISTS `branch_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branch_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch_types`
--

LOCK TABLES `branch_types` WRITE;
/*!40000 ALTER TABLE `branch_types` DISABLE KEYS */;
INSERT INTO `branch_types` VALUES (1,'Lima'),(2,'Provincia');
/*!40000 ALTER TABLE `branch_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `branch_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_branch_branch_type` (`branch_type_id`),
  CONSTRAINT `fk_branch_branch_type` FOREIGN KEY (`branch_type_id`) REFERENCES `branch_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'CENTRAL (JUAN DE ARONA)',1),(3,'BARRANCO',1),(4,'CALLAO',1),(5,'COMAS',1),(6,'JESUS MARIA',1),(7,'LA MOLINA',1),(8,'LA VICTORIA',1),(9,'LIMA CENTRO',1),(10,'LOS OLIVOS',1),(11,'PUEBLO LIBRE',1),(13,'SAN BORJA 1',1),(15,'SAN JUAN DE LURIGANCHO',1),(16,'SAN JUAN DE MIRAFLORES',1),(17,'SAN MIGUEL 1',1),(18,'SURCO',1),(19,'SURQUILLO',1),(20,'AREQUIPA',2),(22,'CAJAMARCA',2),(24,'CHICLAYO',2),(25,'CUSCO',2),(26,'HUANCAYO',2),(27,'HUARAZ',2),(28,'ICA',2),(29,'JULIACA',2),(30,'MOQUEGUA',2),(31,'PIURA',2),(32,'PUCALLPA',2),(33,'PUNO',2),(34,'TACNA',2),(35,'TARAPOTO',2),(36,'TRUJILLO',2),(37,'TUMBES',2),(42,'MIRAFLORES',1),(43,'JAVIER PRADO',1),(46,'SAN MIGUEL 2',1),(47,'SAN BORJA 2',1);
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_employee_branch` (`branch_id`),
  CONSTRAINT `fk_employee_branch` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'JosÃ© Valdivia','70241720','Mariano 1073','71897123','pe@com.pe',1),(2,'d','1123','ca','12312312','p@c.p',5);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_photo_employee` (`employee_id`),
  CONSTRAINT `fk_photo_employee` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'a','b','CFJoLrdPp6j96uWXY1oFeHitu8ndAq.png',1,'2019-01-03 22:24:03'),(2,'jeje','jojo','CxJEzLj56UHLdtg2iWzM8XmE7LD8fP.png',2,'2019-01-03 21:54:36');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20190101045258'),('20190101045426'),('20190101045530'),('20190101050133'),('20190101051621'),('20190101052212'),('20190102144909'),('20190103215726'),('20190103224322');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `vw_branches_types`
--

DROP TABLE IF EXISTS `vw_branches_types`;
/*!50001 DROP VIEW IF EXISTS `vw_branches_types`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vw_branches_types` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `branch_type_id`,
 1 AS `branch_type_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vw_employees_branches`
--

DROP TABLE IF EXISTS `vw_employees_branches`;
/*!50001 DROP VIEW IF EXISTS `vw_employees_branches`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vw_employees_branches` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `dni`,
 1 AS `address`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `branch_id`,
 1 AS `branch_name`,
 1 AS `branch_type_id`,
 1 AS `branch_type_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vw_photos_employees`
--

DROP TABLE IF EXISTS `vw_photos_employees`;
/*!50001 DROP VIEW IF EXISTS `vw_photos_employees`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vw_photos_employees` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `dni`,
 1 AS `address`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `branch_id`,
 1 AS `branch_name`,
 1 AS `branch_type_id`,
 1 AS `branch_type_name`,
 1 AS `photo_id`,
 1 AS `title`,
 1 AS `description`,
 1 AS `file_name`,
 1 AS `created`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_branches_types`
--

/*!50001 DROP VIEW IF EXISTS `vw_branches_types`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_branches_types` AS select `B`.`id` AS `id`,`B`.`name` AS `name`,`BT`.`id` AS `branch_type_id`,`BT`.`name` AS `branch_type_name` from (`branches` `B` join `branch_types` `BT` on((`B`.`branch_type_id` = `BT`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_employees_branches`
--

/*!50001 DROP VIEW IF EXISTS `vw_employees_branches`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_employees_branches` AS select `E`.`id` AS `id`,`E`.`name` AS `name`,`E`.`dni` AS `dni`,`E`.`address` AS `address`,`E`.`phone` AS `phone`,`E`.`email` AS `email`,`E`.`branch_id` AS `branch_id`,`B`.`name` AS `branch_name`,`B`.`branch_type_id` AS `branch_type_id`,`BT`.`name` AS `branch_type_name` from ((`employees` `E` join `branches` `B` on((`B`.`id` = `E`.`branch_id`))) join `branch_types` `BT` on((`B`.`branch_type_id` = `BT`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_photos_employees`
--

/*!50001 DROP VIEW IF EXISTS `vw_photos_employees`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_photos_employees` AS select `E`.`id` AS `id`,`E`.`name` AS `name`,`E`.`dni` AS `dni`,`E`.`address` AS `address`,`E`.`phone` AS `phone`,`E`.`email` AS `email`,`E`.`branch_id` AS `branch_id`,`B`.`name` AS `branch_name`,`B`.`branch_type_id` AS `branch_type_id`,`BT`.`name` AS `branch_type_name`,`P`.`id` AS `photo_id`,`P`.`title` AS `title`,`P`.`description` AS `description`,`P`.`file_name` AS `file_name`,`P`.`created` AS `created` from (((`employees` `E` join `branches` `B` on((`B`.`id` = `E`.`branch_id`))) join `branch_types` `BT` on((`B`.`branch_type_id` = `BT`.`id`))) join `photos` `P` on((`P`.`employee_id` = `E`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-03 22:56:35
