-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: mundo-disney
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'comedia','https://res.cloudinary.com/dlciog3do/image/upload/v1650410302/wyccgtehyyg9dhqbpog8.jpg'),(2,'infantil','image/image.jpg'),(4,'acción','image/image.png'),(5,'drama','https://res.cloudinary.com/dlciog3do/image/upload/v1650410537/dvquusirycayswke0p3h.jpg'),(6,'ciencia ficcion','https://res.cloudinary.com/dlciog3do/image/upload/v1650410454/ohcigkoxdl9fxlnl2ihi.jpg');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(200) DEFAULT NULL,
  `titulo` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `calificacion` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES (1,'https://res.cloudinary.com/dlciog3do/image/upload/v1650396943/oy62r4h099psvmw0qemk.jpg','La era de hielo','2002-03-08',5),(2,'https://res.cloudinary.com/dlciog3do/image/upload/v1650405326/rxn1axpw7ejapkani7v6.jpg','La bella y la bestia','1991-11-13',5),(3,'https://res.cloudinary.com/dlciog3do/image/upload/v1650406272/xaxeroc8zw5y83gmu17c.jpg','La sirenita','1989-11-15',4),(4,'https://res.cloudinary.com/dlciog3do/image/upload/v1650407385/zfezdpjbi4vj3zxbtjoh.jpg','El rey león','1994-06-15',5),(5,'https://res.cloudinary.com/dlciog3do/image/upload/v1650409183/lvbwicz0unddzrv1xktd.jpg','Aladdín','1992-11-25',4);
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas-generos`
--

DROP TABLE IF EXISTS `peliculas-generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliculas-generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `peliculaId` int(11) DEFAULT NULL,
  `generoId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `peliculas_generos_FK` (`peliculaId`),
  KEY `peliculas_generos_FK_1` (`generoId`),
  CONSTRAINT `peliculas_generos_FK` FOREIGN KEY (`peliculaId`) REFERENCES `peliculas` (`id`),
  CONSTRAINT `peliculas_generos_FK_1` FOREIGN KEY (`generoId`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas-generos`
--

LOCK TABLES `peliculas-generos` WRITE;
/*!40000 ALTER TABLE `peliculas-generos` DISABLE KEYS */;
INSERT INTO `peliculas-generos` VALUES (1,1,1),(2,1,2),(3,2,2),(4,3,2),(5,4,2),(6,5,2),(7,2,1),(8,3,1),(9,4,1),(10,5,1);
/*!40000 ALTER TABLE `peliculas-generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas-personajes`
--

DROP TABLE IF EXISTS `peliculas-personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliculas-personajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `peliculaId` int(11) DEFAULT NULL,
  `personajeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `peliculas_personajes_FK` (`peliculaId`),
  KEY `peliculas_personajes_FK_1` (`personajeId`),
  CONSTRAINT `peliculas_personajes_FK` FOREIGN KEY (`peliculaId`) REFERENCES `peliculas` (`id`),
  CONSTRAINT `peliculas_personajes_FK_1` FOREIGN KEY (`personajeId`) REFERENCES `personajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas-personajes`
--

LOCK TABLES `peliculas-personajes` WRITE;
/*!40000 ALTER TABLE `peliculas-personajes` DISABLE KEYS */;
INSERT INTO `peliculas-personajes` VALUES (1,1,1),(2,2,2),(3,1,3),(4,1,4),(5,2,5),(6,3,6),(7,3,7),(8,4,8),(9,4,9),(10,5,10),(11,5,11);
/*!40000 ALTER TABLE `peliculas-personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personajes`
--

DROP TABLE IF EXISTS `personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(200) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `historia` varchar(1200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personajes`
--

LOCK TABLES `personajes` WRITE;
/*!40000 ALTER TABLE `personajes` DISABLE KEYS */;
INSERT INTO `personajes` VALUES (1,'https://res.cloudinary.com/dlciog3do/image/upload/v1650404853/wf2q0sxepybh8ekuf0pa.jpg','Manny',40,1000,'Es un mamut lanudo. Su personalidad se muestra distante y gruñona, pero por lo demás es cariñosa y valiente. En la primera película, mientras pasa a través de la cueva helada, la manada descubre pinturas rupestres de Manny con su esposa e hijo, quienes fueron asesinados por humanos; este es un momento muy sentimental para Manny, ya que no los protegió (cosa que también sucedió con sus padres). Manny encuentra el amor con Ellie en \'Ice Age: The Meltdown\'. En \'Ice Age: Dawn of the Dinosaurs\', él está ansioso cuando Ellie está embarazada. Al final de la película, se convierte en el orgulloso padre de una hija llamada Morita (Melocotón en España). En \'Ice Age: Continental Drift\', se mete en una discusión con su hija adolescente antes de ser arrastrado por la deriva con Diego, Sid y Granny. Más tarde, él y el equipo se encuentran con un grupo de piratas liderados por el Capitán Tripa. Cuando el equipo escapó, destruyeron el barco y se llevaron a Shira con ellos. Esto hace que el Capitán se enfurezca y los persigue. Más tarde, es casi manipulado por sirenas.'),(2,'https://res.cloudinary.com/dlciog3do/image/upload/v1650405636/hh3orupkbfaauxxgw6ti.jpg','Bestia',30,70,'La Bestia es un personaje ficticio que aparece por primera vez en el 30.º largometraje animado de Walt Disney Animation Studios titulado Beauty and the Beast (1991). Basado en el héroe del cuento de hadas francés de Jeanne-Marie Leprince de Beaumont, la Bestia fue creada por la guionista Linda Woolverton y animada por Glen Keane.'),(3,'https://res.cloudinary.com/dlciog3do/image/upload/v1650404920/d0wuodoycgqq2cuvgu5g.jpg','Diego',30,70,'Originalmente vivía con su madre y su padre, y este último siempre traía la gacela más jugosa que podía encontrar para cenar en Navidad. En una parte desconocida de su vida, se uniría a un paquete de 10 sables, de los cuales la mitad fueron asesinados por humanos. Se desconoce si todos los sables son parientes. Diego era cercano a Soto , el líder de la manada, y pronto se convirtió en su lugarteniente. Sin embargo, no sabía que a Soto no le importaba y solo lo veía como un pedine.'),(4,'https://res.cloudinary.com/dlciog3do/image/upload/v1650404990/fulm04swrvzk9c5enojg.jpg','Sid',8,20,'Sid conoció a un mamut lanudo llamado Manny y un Tigre dientes de sable llamado Diego como los tres se hizo un recorrido por la tundra para devolver un bebé humano llamado Roshan a su tribu. Tras el viaje, los tres animales siguieron siendo amigos, formando su propia \'manada\'.'),(5,'https://res.cloudinary.com/dlciog3do/image/upload/v1650406015/txp6cljdg582eslv678e.jpg','Bella',17,50,'Bella es una muchacha que vive en la campiña francesa con su padre, un inventor. Es una hermosa campesina que le gusta leer y seguir las aventuras de su propia imaginación. No es tímida y no tiene miedo de decir lo que piensa, sobre todo en situaciones difíciles, aunque puede ser un poco vacilante cuando está nerviosa. Es muy compasiva, y cuida de los necesitados. Puede ser terca y siempre trata de proteger a la gente que realmente ama. También es muy paciente con los demás.'),(6,'https://res.cloudinary.com/dlciog3do/image/upload/v1650406632/obs7hf3forpomxw93fic.jpg','Ariel',16,50,'Ariel, es un personaje ficticio y el personaje protagonista de la película de animación de 1989, La sirenita, propiedad de Walt Disney. Marcó una nueva era para los estudios Walt Disney, alcanzó logros que no se veían desde 1960 con la película Mary Poppins, con solo una piscina y un corto presupuesto Disney logró crear maravillosas escenas ubicadas en el siglo XIX. «La sirenita» rompió esquemas sociales, siendo Ariel un ejemplo de rebeldía y tenacidad. Posteriormente hace su aparición en la serie de televisión basada en de la película de 1989, su secuela La sirenita 2: regreso al mar y su precuela The Little Mermaid: Ariel\'s Beginning. La voz de Ariel en todas las películas es interpretada por la actriz Jodi Benson, mientras que Sierra Boggess, solamente en la versión inglesa.'),(7,'https://res.cloudinary.com/dlciog3do/image/upload/v1650406939/et8tmowsrmwuii3vcvio.jpg','Sebastián',4,1,'Es un cangrejo y la mano derecha del Rey Tritón, Uno de sus deberes mas recurrentes es vigilar a Ariel para que esta no se meta en problemas. Al no poder controlarla, Sebastián la acompaña en sus aventuras.'),(8,'https://res.cloudinary.com/dlciog3do/image/upload/v1650407814/ykpwueetq0wuqor7zfdx.jpg','Simba',6,70,'Como un cachorro, Simba es curioso, aventurero, arrogante y muy dispuesto a convertirse en rey. Es conocido por sobrepasar su autoridad y su intento de ordenar en torno a las otras criaturas de la Roca del Rey. Sufre un trauma emocional grave cuando Scar, su tío, asesina a Mufasa, el padre de Simba. Sin embargo, Scar convence a Simba que él era responsable de la muerte de su padre, y le dice que debe huir de las Tierras del Reino y nunca volver. Simba ingenuamente muestra una gran confianza en su tío y huye de todo lo que ha conocido nunca, y más tarde coge un estilo de vida feliz, sin preocupaciones, con Timón y Pumba en un paraíso de selva idealista. Como adolescente y adulto, él ha olvidado hace tiempo su antigua vida y una vez más actúa como un exceso de confianza y de aventura como lo hizo como un cachorro. Más tarde, cuando Simba se entera de que Scar está gobernando injustamente las Tierras del Reino, se enfrenta a su pasado y vuelve a tomar su lugar como el legítimo rey. Al tener las responsabilidades de ser un impulso rey sobre él tan de repente, Simba se ve obligado a madurar mucho, y en un corto espacio de tiempo'),(9,'https://res.cloudinary.com/dlciog3do/image/upload/v1650408680/ak6f0hzab2van7newjbu.jpg','Timon',4,20,'Timón vivía en una colonia de suricatos en una pradera muy muy muy muy alejada de las Tierras del Reino junto a Rosario, su madre y la líder de la colonia de suricatos, y el Tío Max, su Tío viejo amargado que veía con malos ojos la conducta de Timón y estaba seguro de que este no acabaría por buen camino. Timón tenía el problema de ser demasiado vago y torpe por lo que siempre fallaba en las tareas más importantes de las suricatas: excavar madrigueras y vigilar a los depredadores. Cuando un descuido de Timón hizo que la colonia casi fuera atacada por las hienas, Timón se ganó el rechazo de la colonia y decidió abandonarla e ir a su destino, en donde estaba seguro de que encontraría su verdadero destino. Durante su viaje fue guiado por el sabio mandril Rafiki, quien le hizo tomar rumbo hacia la Roca del Rey. Durante su marcha, Timón conoció a un jabalí muy bonachón llamado Pumba, como vio que este también vagaba sólo y sin rumbo y además tenía la habilidad de espantar a los depredadores con su olor apestoso, decidió hacerlo su mejor compañero de viaje. Timón y Pumba llegaron a la Roca del Rey en la presentación de Simba, de modo que el lugar estaba muchos animales y tuvieron que bus'),(10,'https://res.cloudinary.com/dlciog3do/image/upload/v1650409450/joh4o5ulognycm2tbps2.jpg','Aladdín',18,60,'Aladdín es un joven pobre que, junto con su mono Abú, se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir. Él y Abú viven en una guarida, una casa abandonada y medio derruida en el bazar de la ciudad donde tienen una amplia vista al palacio. Cuando conoce a la princesa Jasmín se enamora de ella a primera vista, aunque desconoce que es la hija del Sultán. Mientras Aladdín desea vivir rodeado de lujos, Jasmín desea tener una vida sencilla. Cuando descubre que Jasmín es la hija del Sultán y que está obligada a tomar como esposo a un príncipe, entiende que, al ser \'una rata callejera\', jamás tendría una oportunidad de llegar a ella. Así, decide aceptar el trato que le propone un viejo mendigo (que no es más que el malvado brujo Jafar disfrazado) de entrar en la Cueva de las Maravillas, donde le promete una recompensa si trae la lámpara mágica que hay en una de las cámaras de la cueva. Allí consigue la vieja lámpara mencionada por el anciano, pero luego de que este le traicionase, vuelve a caer en la cueva. Luego, estando bajo tierra, Abú le enseña la lámpara, que había recuperado. Al frotarla, descubre que en ella reside un genio que le concederá tres deseos. Logra '),(11,'https://res.cloudinary.com/dlciog3do/image/upload/v1650409672/yslahrw2dig3tde6xpuq.png','Jasmine',15,45,'Cuando se introdujo por primera vez, la Princesa Jasmín estaba a unos pocos días de su decimoquinto cumpleaños. Ella es la hija del sultán, que ha emitido, por ley, que debe elegir un marido (un príncipe) para casarse. Es una mujer joven y vigorosa, con una mente propia. Puede ser testaruda e impetuosa. Tiene un suministro inagotable de fuerza de voluntad, y es muy inteligente, pero a veces puede ser extremadamente arrogante. Aun así, Jasmín tiene un gran corazón y no duda en ayudar a quién la necesita.');
/*!40000 ALTER TABLE `personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Gusatvo','Avila','avila@gmail.com','$2a$10$3kylYFXiZg0IpAZLSxCx0u1GvubGsvHtcC6WAChYmr4UNZSAuXy0K'),(5,'Gustavo','Benitez','avilaGus@gmail.com','$2a$10$QAIxlAdZpLCCR.vmawmFLOj2KD9A9LK51nE6DAvupR5nCLOaDDMvu'),(8,'Victor','Avila','victorg.avila@hotmail.com','$2a$10$e7jVFbD.iCk1xufZWbJDxejIoYqQaO.6PZ2VC8c0yKBX6UQ3c2mKC'),(9,'Victor','Avila','victorg.avila@hotmail.com.ar','$2a$10$xkn47YoByWyWNMLbv0ZmQ.fEpznDvpYbnQJaj./Lkh2hmwbt/zWne'),(10,'Victor','Avila','victor.avila@hotmail.com','$2a$10$RLA/dPFEG8Tp/CoRXxXDV.TKNdixufumFYTJjMQ53gFxp4w9iuNpS'),(11,'Victor','Avila','victorg.avila@gmail.com','$2a$10$3q6rXJtm2CB4y7CmdKBhWeYj2QHZzoPGejV1or6NWbFtbWG3VJsNu');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mundo-disney'
--

--
-- Dumping routines for database 'mundo-disney'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 20:28:05
