-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 04:08 PM
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
(5, 'Dezerty'),
(6, 'Japonská snídaně');

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
(34, 'Sýr'),
(35, 'Šunka'),
(36, 'Žemličky'),
(37, 'Vinný ocet'),
(38, 'Máslo'),
(39, 'Citrón'),
(40, 'Cukr'),
(41, 'Kukuřičný škrob'),
(42, 'Lepkavá rýžová mouka'),
(43, 'Pasta z červených fazolí'),
(44, 'Opražená mouka'),
(45, 'Potravinářské barvivo'),
(46, 'Hladká mouka'),
(47, 'Smetanový sýr'),
(48, 'Moučkový cukr'),
(49, 'Prášek do pečiva'),
(50, 'Parmazán'),
(51, 'Pórek');

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
(35, 'Banánové lívance', 'Tak tenhle recept, to je u nás poslední dobou fakt hit. Miuška je totiž miluje a je schopná jich sníst opravdu hodně. Víceméně celou tuhle dávku sní během dvou dnů většinou sama. Dělám je často na cesty, protože s nima nedělá velkej bordel a je to jistota. Určitě to není ale recept jenom pro děti. Mně chutnají taky moc a navíc jsou bez cukru (až na trochu sirupu v malinách, který ale ne vždycky dělám) a místo mouky jsou tam vločky.', 'Všechny ingredience na lívance vložím do mixéru a promixuju v hladký kompaktní těsto. Pokud používám zralý banány, což doporučuju bude těsto tak akorát sladký. Nemělo by být moc řídký, ale ani úplně hutný. Mělo by se jen lehce rozlít na pánvi. Pokud bude hodně řídký, přidám klidně ještě vločky a znovu promixuju, pokud hodně hustý, přidám vodu nebo mléko.\n\nNa pánvi si na středním plameni rozpálím trochu kokosovýho oleje a lívanečky opékám z obou stran dozlatova. Je to celkem rychlý, tak pozor, ať se nepřipálí.\n\nZmražený nebo čerstvý maliny dám do kastrůlku (pokud použijeme čerstvý, podliju je jen trochu vodou), přidám javorový sirup a nechám společně tak deset minut probublat. Hotový lívance namažu oblíbenou marmeládou nebo ořechovým máslem, naskládám na sebe, přeliju ovocným rozvarem a podávám. ', 'https://www.ekucharka.cz/obrazky/recepty/1579/1049/bananove-livance-F.jpg', 10, 21, 119, '2022-05-26 14:15:16', 1, 1),
(36, 'Raw brownies', 'Raw dort měl u vás velkej úspěch, tak jsem se rozhodla zveřejnit další raw recept. Tentokrát je to brownies, který vlastně není nic jinýho, než takovej větší korpus toho dortu. Mně chutnalo moc a byla jsem překvapená, že i Adam ho snědl s chutí. Akorát pak skoro nechtěl večeři, jak je to sytý. Skvělý je na snídani, ale hlavně na svačinu. Dodá fakt hodně energie, takže do práce nebo do školy ideální.', 'Nejdřív jsem v robotu rozmixovala kešu ořechy a teprve pak jsem k nim přidala zbylý ingredience. Mixovala jsem do tý doby, než jsem neměla jednotnou hmotu. Do formy (přibližně 25×15 cm – brownies by mělo být vysoké tak 2 cm) jsem si pak dala pečící papír a na něj jsem urovnala rukama připravenou směs. Jde to trošku ztuha, tak se musí malinko zabrat. Takhle připravenou směs jsem ještě posypala drcenejma kešu oříškama a dala jsem na hodinu do mrazáku. Pokud nemáte formu, která může do mrazáku, pečící papír se směsí z formy vyndejte a dejte na nějakou podložku – třeba prkýnko. Před podáváním jsem nechala brownies trochu povolit a posypala jsem ho granátovým jablkem.', 'https://truffle-assets.imgix.net/d53a1278-raw-vegan-not-gross-s2e6-chocolate-brownies-with-ganache-landscapethumbnail-en.jpeg', 1, 30, 189, '2022-05-26 14:19:37', 5, 1),
(37, 'Huevos rancheros', 'Pokud máte rádi mexickou kuchyni, tak byste určitě měli vyzkoušet i jejich snídaně. Tyhle rančerský vejce jsou příklad, jak taková mexická snídaně může vypadat. Pro někoho je možná nepředstavitelný, že si dá po ránu něco ostrýho, ale fakt to člověka nakopne. A pokud ostrý zrovna nemusíte, tak to chilli vynechte. I když mně to přijde jako věčná škoda, protože je to dost zdravý…', 'Cibuli jsem nakrájela na kolečka, česnek na plátky, očištěnou papriku na větší kostky, rajčata na menší kostky a chilli na kolečka (množství a druh dávejte podle sebe). Cibuli a papriku jsem opékala asi pět minut na oleji, pak jsem přidala česnek, chilli, římský kmín a pokračovala jsem ještě další minutu. Směs jsem zalila rajčatovým pyré, přidala jsem čerstvý rajčata, fazole, sůl a pepř. Všechno jsem promíchala, přiklopila pokličkou a dusila pět minut. V tuhle chvíli máte poslední možnost směs dochutit a promíchat. Pokud vám přijde směs kyselá, přidejte trochu cukru. Lžící jsem pak vytvořila ve směsi důlek a do toho jsem rozklepla vejce. Dávejte pozor, ať vám tam nespadne skořápka. Proces jsem opakovala čtyřikrát a pak jsem zase pánev přiklopila pokličkou a nechala asi čtyři minuty dusit. Bílek musí bejt uvařenej a žloutek by měl zůstat tekutej. Nakoukněte proto občas pod pokličku a sledujte, jak na tom vejce je. Hotový vejce podávejte buď s tortillou nebo klasickým pečivem a zdobte čerstvým koriandrem a sýrem. Pro masožrouty doporučuju přidat do základu slaninu nebo nějakou klobásku.', 'https://ichef.bbci.co.uk/images/ic/1920x1080/p03kktfb.jpg', 1, 45, 259, '2022-05-26 14:31:02', 2, 1),
(38, 'Vejce Benedikt', 'Vejce Benedikt tvoří opečený plátek anglického snídaňového muffinu, na něm plátek šunky, na šunce ztracené vejce a to vše přelito holandskou omáčkou.', '1) Připravte si nejprve ztracená vejce. Vodu v hrnci osolte a přidejte i trochu octa. Přiveďte těsně pod bod varu a lžící vodu roztočte, aby vytvořila mírný vír. Vejce vyklepněte do cedníku nebo do děrované naběračky (zbaví vás nejvíc tekutého bílku, který dělá nepořádek). Přímo z naběračky pak opatrně nechte vajíčko sjet do středu víru. Vařte 3 až 4 minuty.\n\n2) Uvařená vejce dejte stranou do studené vody. Před podáváním je pak na minutu ponořte do teplé vody a pak krátce osušte na ubrousku. Muffiny opečte dokřupava.\n\n3) Pro holandskou omáčku budete potřebovat svařený ocet. Připravte si ho v rendlíku, kde dáte 1 lžíci dobrého vinného octa, 4 lžíce vody a lžíci pepře. Přiveďte k varu a svařte o třetinu objemu. Sceďte přes jemné sítko a nechte vychladnout.\n\n4) Teď už jdeme konečně na holandskou. Začněte tím, že si připravíte vhodný pár – hrnec a mísa, která do něj tak akorát sedne. Na dně hrnce by měla být tenká vrstva vody (cca 3 cm) a o kousek nad ní pak dno misky. Vodu v hrnci přiveďte k varu. Žloutky dejte do mísy. Přidejte svařenou octovou redukci a metličkou spolu se žloutky rozmíchejte.\n\n5) Hrnec s vodou si dejte mimo plamen. Přiklopte mísou a bez rozpaků začněte žloutky šlehat. Šlehejte pěkně energicky a nevynechte žádné místečko na dně mísy. Na videu ukazuji postup s klasickou metlou, obzvlášť tady se ale hodí tyčový mixér s metličkou v nástavci. Žloutky se vám postupně promění před očima. Nejprve zesvětlají a pak i krásně zhoustnou. Poznáte to tak, že za metlou zůstávají pěkné stuhy a závěje z našlehaných žloutků.\n\n6) Za stálého šlehání postupně přidávejte rozpuštěné máslo. Zprvu jen po kapkách a tenkým pramínkem. Každou porci másla musíte průběžně rozmíchat. Omáčka teď začne nabírat finální podobu a krásně zhoustne.\n\n7) Jakmile zašleháte všechno máslo, dochuťte omáčku citronovou šťávou a solí. Nebojte se toho! Omáčku je potřeba dochutit poměrně výrazně. Od této chvíle je potřeba s omáčkou zacházet opatrně – udržujte ji zakrytou a nejlépe v mírném teple (dá se použít i termoska).\n\n8) Na konec. Připravte si muffiny a ztracená vejce. Teď je ta správná chvíle je ohřát a osušit na ubrousku. Vejce Benedikt zkompletujte na talíři. Nejprve anglický muffin, pak plátek šunky, ztracené vejce, holandská omáčka.', 'http://recepty.cuketka.cz/media/recipe/main_imgs/vejce_benedikt_3_16x9_2400o.jpg', 8, 15, 189, '2022-05-28 22:29:13', 1, 18),
(39, 'Mochi', 'Mochi jsou japonské koláčky z rýžové pasty z lepkavé rýže. Podávají se hlavně při oslavách nového roku. Obvykle jsou koláčky plněné lahodnou náplní. Toto balení obsahuje 6 koláčků, které jsou plněné náplní z červených fazolí, tato náplň připomíná česká švestková povidla.', 'V hrnci smíchejte vodu s cukrem a přiveďte do varu, po té plamen vypněte a nechte vychladnout.\nRozdělte si takto smíchanou hmotu do 4 částí, dejte do malých šálků (třeba na kávu) a přidejte do každého z nich pár kapek potravinářského barviva.\nTeď smíchejte kukuřičný škrob a lepkavou rýžovou mouku a dejte ¾ šálku této směsi do každé nádoby k původní hmotě. Hmota je ještě horká.\nV každém šálku směs promíchejte, dokud se nevytvoří hladké těsto. Vytvořte si z těsta malé placičky asi tak o velikosti průměru sklenice a doprostřed umístěte červenou fazolovou pastu. Uzavřete a vytvořte kuličku.\nVložte do páry a nechte cca 5 minut prohřát. \nPoté kluličky vyválejte v opražené mouce, aby se k sobě neslepovaly. Podávat je můžete jak teplé tak i studené. ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDpGojLhGyB051ZqbRERrUlmh60m5UXUANg&usqp=CAU', 2, 20, 239, '2022-05-28 22:49:36', 1, 18),
(40, 'Nadýchaný japonský cheesecake -_-', 'Anglicky zvaný cheesecake už zná nejspíš každý. Že existují recepty, které jsou sice podobné, ale v každé části světa vypadají jinak, na to už jsme si také zvykli. Nyní ale dostanete možnost porovnat dva cheesecaky z opačných stran světa, které se od sebe snad nemohou lišit víc. Zatímco americký cheesecake je hutný a lesklý, ten japonský připomíná ze všeho nejvíc pěnovou houbu.', '1)Do hrnce nalijte mléko a přidejte k němu smetanový sýr a máslo. Zahřívejte přísady na mírném ohni, dokud se nezačnou rozpouštět. Metličkou rozmělněte sýr i máslo a vše dobře promíchejte. Pokračujte v zahřívání směsi tak dlouho, dokud se všechny přísady nepropojí a nezískáte hladkou a lesklou směs. Pak ji odstavte ze sporáku.\n2)K horké směsi prosejte přes jemné sítko hladkou mouku a kukuřičný škrob, vše dobře promíchejte a vytvořte husté těsto. Pokračujte v míchání, dokud nezíská úplně hladkou texturu.\n3)Vyklepněte vajíčka a oddělte bílky od žloutků. Žloutky samotné přidejte ke smetanovému těstu a důkladně je do něj zapracujte. Bílky vyšlehejte do pevné pěny. V průběhu šlehání přidejte v několika krocích moučkový cukr. Pokračujte ve šlehání, dokud po vytažení metliček na povrchu sněhu nezůstanou pružné, ale pevné špičky.\n4)Bílkový sníh jemnými krouživými pohyby zapracujte do smetanové hmoty se žloutky a vytvořte homogenní směs, kterou vlijte do kulaté dortové formy, jejíž dno vyložte kouskem pečicího papíru. Špejlí těsto spirálovitým pohybem od středu ven promíchejte, abyste urovnali hladinu a formou párkrát jemně ťukněte o pracovní desku, abyste vyhnali ven vzduchové bubliny.\n5)Troubu rozehřejte na 120 °C a vložte do ní nízký plech plný vody. Když je rozehřátá, umístěte na plech s vodou formu s těstem a pečte ho 20 minut. Aniž byste otvírali dvířka trouby, zvyšte teplotu na 150 °C a pokračujte v pečení dalších 15 minut. Nyní otevřete dvířka trouby na 10 sekund. Pak je opět zavřete, snižte teplotu na 100 °C a pokračujte v pečení dalších 40 minut.\n6)Po 40 minutách vypněte troubu, otevřete dvířka a hned je zase zavřete a nechte dort v troubě zvolna chladnout dalších 10 minut. Poté vyndejte dort z trouby a jemným třesením oddělte těsto od formy. Mělo by to jít celkem snadno. Opatrně jej pak překlopte na talíř, sloupněte z něj pečicí papír a otočte dort zpátky vrchní stranou nahoru. Nakrájejte ho a podávejte.', 'https://cookingwithdog.com/wp-content/uploads/2016/09/souffle-cheesecake-25.jpg', 1, 110, 129, '2022-05-28 23:15:08', 6, 19),
(41, 'Belgické vafle', 'Vynikající dezert, který je kulinářským lákadlem restaurací, ale i pojízdných stánků v ulicích Bruselu a dalších měst v Belgii. Nejlépe chutná s čerstvým ovocem. Lze servírovat i jako snídani!', '1)V míse smícháme suché přísady. Oddělíme bílky od žloutků a bílky ušleháme do tuha. K suchým přísadám přidáme olej, mléko a žloutky a šleháme dokud není těsto na vafle hladké. Přidáme ušlehané bílky. \n2)Hotové těsto nalijeme do přístroje na vafle a pečeme asi 5-7 minut. Podáváme s javorovým sirupem, marmeládou, medem nebo nutellou', 'https://static.toprecepty.cz/fotky/clanky_hlavni/top-view-composition-tasty-waffles-1-1920-1080-wide.jpg', 4, 15, 89, '2022-05-29 00:28:37', 2, 18),
(43, 'Vaječná pórková omeleta', 'Nikdy nezaškodí připomenout si i základní recepty. Schválně, kdy jste si naposledy připravili dobrou omeletu? Tahle pórková je kořeněná špetkou kmínu, dodává jí příjemně zemitou a povědomou chuť. Rychlé, syté a poměrně levné jídlo. Už víte, co bude dnes k večeři?', 'Krok 1: Z pórku odřežte kořínky, pořádně ho omyjte a bílou část nakrájejte na tenká kolečka. Vejce rozklepněte do misky, osolte, opepřete a přidejte větší špetku kmínu. Prošlehejte a nechte chvíli stranou.\n\nKrok 2: Vyhřejte troubu na 180 °C a připravte si středně velkou pánev, kterou do ní můžete vložit. Pánev rozpalte na vyšší, ne však nejvyšší teplotu (stupeň 8 z 10). Přidejte máslo a olej a nechte zahřát. Vsypejte kolečka pórku, osolte a zvolna za občasného míchání opečte, až pórek zvláční, postačí tři čtyři minuty.\nKrok 3: Opečený pórek roztáhněte v jedné vrstvě po dně pánve a opatrně ho zalijte rozšlehanými vejci. Nechte pánev bez míchání na plotně asi dvě tři minuty, až spodek omelety zpevní, a poté ji přeneste do trouby (mřížku umístěte do horní třetiny) a pečte ještě asi čtyři až pět minut, až zpevní a začne zlátnout i povrch omelety.\nKrok 4: Před podáváním posypejte zelenými natěmi nebo výhonky. Přidáte-li pár uvařených brambor (nebo dobrý chléb) a misku zeleniny, vystačí tahle omeleta jako lehká večeře pro dva lidi', 'https://d50-a.sdn.cz/d_50/c_img_H_C/4RhT2.jpeg?fl=cro%2C0%2C0%2C2000%2C1125%7Cjpg%2C80%2C%2C1', 2, 20, 145, '2022-05-29 11:41:35', 1, 18);

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
(37, 34, 'Sýr', 50, 3, 'g'),
(38, 1, 'Voda', 4, 6, 'lžíce'),
(38, 12, 'Vajíčka', 12, 5, 'ks'),
(38, 35, 'Šunka', 8, 5, 'ks'),
(38, 36, 'Žemličky', 4, 5, 'ks'),
(38, 38, 'Máslo', 250, 3, 'g'),
(38, 37, 'Vinný ocet', 1, 6, 'lžíce'),
(38, 39, 'Citrón', 1, 5, 'ks'),
(38, 5, 'Sůl', 1, 10, 'špetka'),
(39, 1, 'Voda', 2, 11, 'hrnek'),
(39, 40, 'Cukr', 1, 11, 'hrnek'),
(39, 41, 'Kukuřičný škrob', 1, 11, 'hrnek'),
(39, 42, 'Lepkavá rýžová mouka', 3, 11, 'hrnek'),
(39, 43, 'Pasta z červených fazolí', 1, 11, 'hrnek'),
(39, 44, 'Opražená mouka', 1, 9, 'hrst'),
(39, 45, 'Potravinářské barvivo', 2, 5, 'ks'),
(40, 6, 'Mléko', 60, 1, 'ml'),
(40, 47, 'Smetanový sýr', 140, 3, 'g'),
(40, 46, 'Hladká mouka', 50, 3, 'g'),
(40, 41, 'Kukuřičný škrob', 15, 3, 'g'),
(40, 12, 'Vajíčka', 5, 5, 'ks'),
(40, 48, 'Moučkový cukr', 100, 3, 'g'),
(41, 5, 'Sůl', 1, 8, 'lžičky'),
(41, 46, 'Hladká mouka', 175, 3, 'g'),
(41, 12, 'Vajíčka', 3, 5, 'ks'),
(41, 23, 'Olej', 7, 6, 'lžíce'),
(41, 6, 'Mléko', 150, 1, 'ml'),
(41, 40, 'Cukr', 1, 6, 'lžíce'),
(41, 49, 'Prášek do pečiva', 2, 8, 'lžičky'),
(43, 51, 'Pórek', 1, 5, 'ks'),
(43, 12, 'Vajíčka', 4, 5, 'ks'),
(43, 38, 'Máslo', 1, 8, 'lžičky'),
(43, 23, 'Olej', 2, 6, 'lžíce'),
(43, 5, 'Sůl', 1, 10, 'špetka'),
(43, 2, 'Pepř', 1, 10, 'špetka'),
(43, 50, 'Parmazán', 1, 6, 'lžíce');

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
(18, 'KatJapSusChef', 'katchef@seznam.cz', 'Kateřina', 'Barešová', '123', '2022-05-28 22:35:20', 1),
(19, 'Danielachefis', 'danielka123@gmail.cz', 'Daniela', 'Vernerová', '6614fadcc14c9b2f2d52b06dc7762506', '2022-05-28 23:00:06', 3);

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
  MODIFY `id_ca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id_in` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

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
  MODIFY `id_re` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_ro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
