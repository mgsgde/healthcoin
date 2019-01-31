
# Healthcoin 
Folgendes Projekt wurde im Zuge der Vorlesung "Ubiquitäre Informationstechnologien" auf Basis des **Unified Design Thinking Model** (gehalten von Prof. Dr. Michael Beigl) erstellt.

## 1. Discover: Problemfindung mit der 10+10 Methode 

1. Economy of things (e.g. auto bezahlt automatisch die elade säule, pay per use werkzeug/machine)
- Engineer: 6
- Managmenet: 3
- Production: 5
- Marketing: 3
- User: 3

---


2. Hardware wallet (arduino stores private key and is capable of signing tx)
- Engineer: 6
- Managmenet: 10
- Production: 8
- Marketing: 10
- User: 10
- **Aber existiert bereits.**

---

3. Appliance welche schritte zählt und falls eine schrittzahl erreicht wurde krypto geld an träger auszahlt.  
- Engineer: 7
- Managmenet: 5
- Production: 7
- Marketing: 8
- User: 7

---

4. Blockchain door opener that opens when crypto coins are sent to a smart contract (e.g. rent cars, pay rent for apartment ...) 
- Engineer: 6
- Managmenet: 3
- Production: 4
- Marketing: 4
- User: 3

---

5. Appliance die an einem Boxhandschuh befestigt wird und geschwindigkeit und beschleunigung misst
- Engineer: 9
- Managmenet: 10
- Production: 9
- Marketing: 1
- User: 1

---

6. Appliance welche via GPS Geräte tracked
- Engineer: 8
- Managmenet: 7
- Production: 7
- Marketing: 7
- User: 8
- **Aber existiert bereits.**

---

7. LED Weihnachts Beleuchtung. welche einen QR code oder URL anzeigen kann. Der QR code bzw die URL verweisen auf eine crypto Adresse, an welcher man crypto coins zahlen kann. Wenn eine Zahlung eintrifft dann geht die Lichterkette an und ein random Programm wird abgespielt
- Engineer: 5
- Managmenet: 10
- Production: 2
- Marketing: 7
- User: 7

## 2. Emphatize: 

### 2.1 First Sketch
 ![Image of components](/images/sketch.healthcoin.jpg)

### 2.2 User Stories

- Ich bin ein 25 Jahre alter sportlicher und technik begeisterter Student. Da ich mich nicht mehr über meine Eltern versichern kann, bin ich auf der Suche nach einer neuen coolen Krankenversicherung.   
- Ich bin jung und sportlich. Da ich regelmäßig joggen gehe möchte ich weniger für meine Krankenkasse bezahlen als mein Arbeitskollege, der keinerlei Sport betreibt. 

### 2.3 Experten Meinung

- Mitarbeiter bei der Debeka
- Feedback: Krankenkassen unterliegen dem Diskriminierungsverbot und die Appliance diskriminiert unsportliche Menschen.

### 2.4 Market Research

#### 2.4.1 Size of Market
- Aufgrund der Krankenversicherungspflicht sind alle 80 Mio Menschen in Dt versichter
- 8.7 Mio sind privat versichert, der Rest ist gesetzlich versichert
. Quelle: "Seit dem 1. Januar 2009 besteht gemäß § 193 III VVG die Allgemeine Krankenversicherungspflicht, demnach sich alle Personen mit Wohnsitz in Deutschland bei einem in Deutschland zugelassenen Krankenversicherer gegen Krankheitskosten versichern müssen"
- Quelle: https://de.statista.com/statistik/daten/studie/155823/umfrage/gkv-pkv-mitglieder-und-versichertenzahl-im-vergleich/

- potentielle Kunden:  
- Alter: 18, 23, 25 (Mit 18 Jahren fallen sie aus der Familienversicherung. Ausnahme Studenten, welche mit 25 Jahren aus der Versicherung fallen.)
- Bevölkerung Alter 18 bis 25: 7.286.000 
- Quelle: https://www.zinsen-berechnen.de/geld-kinder/versicherungen.php 
- Quelle: https://de.statista.com/statistik/daten/studie/1351/umfrage/altersstruktur-der-bevoelkerung-deutschlands/

- Preis einer Appliance habe ich nur beispielhaft berechnen können => Markt Volumen in Euro kann ich dementsprechend nicht bestimmen

#### 2.4.1 Growth of Market
- Bevölerkungsgruppe der 18 bis 25 Jährigen wird von Jahr zu Jahr kleiner => Schrumpfender Markt
Quelle: https://de.statista.com/statistik/daten/studie/248090/umfrage/entwicklung-der-bevoelkerungsstruktur-deutschlands-nach-altersgruppen/

#### 2.4.2 Market Potential 
- alle Krankenverischerungen => alle Kunden im Alter von 18-25 => Monopol (economy of scale wegen Plattform)

#### 2.4.3 Competetitors
- Domain name healthcoin steht zum verkauf 
- https://heathcoin.com/de-de

- es hat eigt jede größere versicherung ein bonusprogramm am laufen. Nur ist dies meistens noch nicht digitlaisiert und die punkte kann man auch nur für bestimmte dinge einlösen. Es existiert noch kein Bonumspunkte system wie payback was überall gilt. das kann via blockchain geschaffen werden.
- Quelle:https://www.n-tv.de/ratgeber/Lohnt-sich-das-Punktesammeln-article16795776.html

- https://www.healthmiles.de/index.html
- SECURVITA Krankenkasse

- tk bonus programm 
- geht in die gleiche richtung
https://www.tk.de/techniker/service/gesundheit-und-medizin/praevention-und-frueherkennung/tk-bonusprogramm/programm-2010356

- das gleiche was payback groß gemacht hat, die economy of scale, kann auch die heathcoin groß machen. sogar noch größer als payback da durch die blockchain als dezentrale vertrauenswürdige technologie die hemmnise dem konsortium beizutreten und eine kritische masse zu generieren och geringer sind 
https://www.payback.net/de/ueber-payback/

#### 2.4.4 Problems entering the market
- angewiesen auf krankenversicherungen oder arbeitgeber - wir können die appliance nicht selbst an endkunden verkaufen da wir nicht von der gesundheit der endkunden profitieren und demnach keine gegneleistungen für die healthcoins anbieten könnten
- Datenschutz im Bereich Gesundheitsdaten spiele eine große Rolle

- Fehler: ich habe die appliance erklärt und feedback bekommen. ich hätte nur die user story beschreiben solle => wollte ihr von krankenkassen für joggen bezahlt werden. würde ihr zu so einer krankenkasse wechseln.

#### 2.4.5 How do you make Business

Software ist umsonst,	

Hardware = zb. smart watch muss von Krankenverischerungen besorgt werden

subscription und pay as you go:
- auf der blockchain bin ich eine authority welche entscheided wer für wie lange wie viele heathcoins schürfen darf.	
- die krankenversicherungen müssen somit lizenzgebühren für die public private key pairs zahlen mit welchen sie für ihre kunden healthcoins schaffen können
- zusätzlich müssen sie für jede tx zahlen mit der healthcoins überwiesen wurde. Sprich Betrag ist abhängig davon wie viel ihre Kudnen laufen.

#### 2.4.6 Growth Strategy

- würde ich nur subscriptions anbieten, dann könnte ich kein wachstum erzeugen, da es ein schrumpfender markt ist (18-25 jährigen werden weniger)
- ich veridene an der anzahl an tx  => growth => growth of #tx
- economy of scale: je größer die plattform ist desto attraktiver werden die healthcoins für die nutzer und desto mehr tx werden getätigt
=> Konsortium an KV und Unternhemen welche die healthcoins akzeptieren vergrößern, damit #tx wächst und ich mehr profit mache

## 3. Define: Healthcoin

### 3.1 Healthcoin
Ein mobiles Endgerät (z.B. in der Form einer smart watch) ausgestattet mit Bewegungssensoren erfasst die Fitness Aktivitäten einer Person und schickt der Person zur Belohnung regelmäßig via Blockchain Protokoll Tokens. Die Tokens heißen "Healthcoins". Das mobile Endgerät und die Healthcoins werden von Unternehmen herausgegeben werden, welche ein Interesse an der Gesundheit der jeweiligen Person haben (z.B. der Arbeitgeber oder die Krankenkasse). Die Healthcoins können gegen Waren und Dienstleistungen eingetauscht werden (z.B. Waren und Dienstleistungen des Unternehmens-Konsortiums, welches die Healthcoins via Blockchain emittiert). 

### 3.2 Key Values

Die Nutzer können die Healthcoins gegen Waren und Dienstleistungen eintauschen. 

Die Healthcoin kann die Nutzer motivieren sich zu bewegen. Mäßige Bewegung fördert die Gesundheit und reduziert somit die Wahrscheinlichkeit der Nutzer krank zu werden. 

Arbeitgeber profitieren von den ausbleibenden Kosten für die Krankheitstage. 

Krankenkassen profitieren von den ausbleibenden Kosten für Arztbesuche und Medikamente.  

Krankenkassen erhalten mit der Healthcoin eine Kundenschnittstelle. 

Unternehmen und Krankenkassen können Healthcoins für den Vertrieb von Waren und Dienstleistungen nutzen. 

Die Healthcoin kann von Krankenkassen als Vertriebs- und Marketingmaßnahme zur Gewinnung neuer Kunden genutzt werden. 

Die dezentrale Blockchain Technologie kann es der Healthcoin erleichtern sich als Branchenstandard durchzusetzen. Dies kann widerum zu positiven Netzwerkeffekten führen. 

Die Dokumentation von Fitness Aktivitäten auf der Blockchain in Form von Healthcoins kann der erste Schritt sein in Richtung einer digitalen Gesundheitsakte. 

## 4. Ideate: Alternative Lösungsmöglichen
 ![Image of components](/images/ideateLösungen.healthcoin.jpg)

## 5. Prototype

### Komponenten:

- Arduino Mega
- MPU-6050 Accelerometer + Gyro
- Logic-Level-Shifter (5V zu 3.3V)
- Akku
- ESP32-DevKitC
- LCD1602 Display 

**Anmerkung**: 
Die Auswahl der Komponenten wurde in erster Linie unter dem Gesichtspunkt der einfachen Handhabe und Verfügbarkeit getroffen. So ist der Arduino Mega Microcontroller überflüssig, da der ESP32 Microcontroller auf dem ESP32-DevKitC Board zur Ansteuerung des MPU-6050 Moduls ausreicht. Zudem kann das ESP32-DevKitC Development Board durch einen ESP32-WROOM-32 Microcontroller ersetzt werden. Desweiteren ist der Akku üderdimensioniert. 

### Schema
![Image of components](/images/healthcoin.components.fritzing.png)

### Foto
![Image of components](/images/healthcoin.components.foto.png)

### Funktionsweise

(Siehe Bild 1) Der Nutzer trägt das mobile Endgerät beispielsweise in Form von einer smart watch während er läuft. Das mobile Endgerät ist via ESP32-DevKitC Board über WiFi mit dem Internet verbunden. Das mobile Endgerät erfasst die Bewegungsdaten mit einem Beschleunigungsmesser und Kreiselkompass. Einmal pro Sekunde werden Bewegungsdaten erfasst. Wenn das mobile Endgerät anhand der Bewegungsdaten auf eine Fitness Aktivität zurückschließen kann, dann bekommt der Nutzer einen Punkt. Wenn der Nutzer eine bestimmte Anzahl von Punkten erreicht hat, dann sendet das mobile Endgerät via HTTP ein Signal an den Server. Der Server wird von einem der Herausgeber der Healthcoins betrieben. Der Server erstellt und signiert eine Blockchain Transaktion, welche dem Nutzer eine Healthcoin zuspricht. Die Transaktion wird via HTTPS an den Blockchain Node Betreiber Infura geschickt. Infura propagiert die Transaktion anschließend im Blockchain Netzwerk. Sobald die Transaktion in die Blockchain eingearbeitet wurde, kann der Nutzer mit einem Wallet seiner Wahl seine Healthcoins verwalten (siehe Bild 2). Der Healthcoin Token Contract ist [hier](https://etherscan.io/token/0x39533ce7589574205f20b34c028fe4f30ab68e3b) einsehbar.       

**Bild 1:** Architektur

![Image of architecture](/images/architecture.jpg)

**Bild 2:** Mobiles Wallet zur Verwaltung der Healthcoins

![Image of wallet1](/images/wallet1.png)

### Kommunikations-Protokolle und Technologien

#### Interface: Arduino to ESP32 Modul

**UART - Universal Asynchronous Receiver Transmitter** 

- communication is serial
- communication is asynchronous = no clock
- bidirectional => only two devices
- two cables for transmitting, receiving signals
- Format: Startbit, 7xDatabits, ParityBit, EndBit

**Pro:**
- Simple hardware to connect two devices with only two cables

**Contra:**
- Langsamer als I2C (maximal 115200 Bit/Second (UART) vs 3.2 Mega Bit/Second (I2C))
- not a bus => only two devices can communicate with each other
- Baudrate needs to be manually implemented on all devices

**Sources:**
- https://de.wikipedia.org/wiki/Serielle_Daten%C3%BCbertragung
- https://de.wikipedia.org/wiki/Bus_(Datenverarbeitung)
- https://www.arduino.cc/en/Reference/softwareSerial
- https://www.youtube.com/watch?v=ZzRXKDkMBhA
- http://www.rfwireless-world.com/Terminology/UART-vs-SPI-vs-I2C.html


#### Interface: Arduino to Accelerometer

**I2C - Inter Integrated Circuit**

- communcation is synchronous => Clock Line
- communcation is serial
- bus => multiple devices can communicate 
	- master / slave: 
		- master controles Clock line
		- master is the only one that can initiate a transfer 
		- master can read and write to/from slave => data transfer can happen in both directions
- Format Writing: Start bit, typically 7 bits for addresses, Write Bit, Register Number, Write Data bytes, Stopbit
- Format Reading: Start bit, device address (typically 7 bits), Read Bit, Startbit, register address, >>Read Data bytes<<, Stopbit
- I2C level shifters which can be used to connect to two I2C buses with different voltages.

**Pro:**
- bus => multiple devices 
- faster than UART

**Contra:**
- more complex than UART

**Sources:**
- https://robot-electronics.co.uk/i2c-tutorial
- https://www.youtube.com/watch?v=DsSBTYbXAKg
- https://learn.sparkfun.com/tutorials/i2c/all
- https://en.wikipedia.org/wiki/Clock_signal
- https://www.youtube.com/watch?v=wx0NyUfpm48
- http://www.rfwireless-world.com/Terminology/UART-vs-SPI-vs-I2C.html


### Todo

1. Es sollte eine mobile Applikation implementiert werden, so dass die Appliance nicht auf WiFi angewiesen ist und via Bluetooth über ein Smartphone mit dem Server kommunizieren kann. 
2. Der Nutzer sollte seine Blockchain Adresse eingeben können. Momentan ist die Adresse des Nutzers "hard gecoded" auf dem Server.
3. Der Server Aufruf von der Appliance erfolgt unverschlüsselt via HTTP. Es sollte hier eine beidseitige Authentifizierung statt finden und Daten sollten verschlüsselt versendet werden.
4. Die Funktion, welche auf Basis der Bewegungsdaten auf die Fitness Aktivität schließt, sollte verbessert werden. Momentan wird lediglich geprüft ob die Summe der x,y,z Beschleunigungsdaten einen (durch Ausprobieren bestimmten) Schwellenwert überschreitet. 
5. Die Auswahl der Elektronik Komponenten sollte unter ökonomischen und funktionellen Gesichtspunkten neu durchdacht werden. 


## 6. Testen und Bewerten

### 6.1 Feldtest
**TODO**

### 6.2 Kostenberechnung via COSYSMO (Constructive Systems Engineering Cost Model)

**System Requirements**:
1. The Appliance shall count steps
2. The Appliance shall show the progress of counting steps on a Display
3. The Appliance shall communicate via wlan with a webserver
4. The Appliance shall authenticate to the webserver
5. The Appliance shall have its own mobile power supply
6. The Webserver shall send transactions to a Blockchain node

**Interfaces:**
1. arduino to esp32 module
2. esp32 module to werbserver
3. webserver to blockchain node

**Algorithms:**
1. step counting algorithms

**Operations Scenarios:**
1. Walk with Appliance and check whether Display shows step count
2. Walk with Appliance and check whether tokens get transferred

**Effort Multipliers:**
1. high Technology Risk

**COSYSMO Ergebnis:**
 ![Image of components](/images/healthcoin.cosysmo.jpg)

**Kritik**
- Ursprung und Alter der Trainingsdaten zur Bestimmung der Parameter nicht bekannt 
- Güte des Systems nicht spezifiert

### 6.3 Pricing mit 50% Rule of Thumb Regel

**Hardware Costs:** 

- ESP32 ESP-WROOM-32 IoT Wifi Wlan BLE Module+ESP-32S Adapter Board
- $ 3.31
- https://www.aliexpress.com/item/ESP32-ESP-WROOM-32-IoT-Wifi-Wlan-BLE-Module-ESP-32S-Adapter-Board/32933002394.html?spm=2114.search0104.3.50.7fd04071oSosfn&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=68ce317f-37a6-4a4d-b34a-fa940a8ac824-7&algo_pvid=68ce317f-37a6-4a4d-b34a-fa940a8ac824&transAbTest=ae803_4

---

- GY-521 MPU-6050 MPU6050 Module 3 Axis analog gyro sensors+ 3 Axis Accelerometer Module
- $ 0.75 
- https://www.aliexpress.com/item/GY-521-MPU-6050-MPU6050-Module-3-Axis-analog-gyro-sensors-3-Axis-Accelerometer-Module/32340949017.html?spm=2114.search0104.3.8.63c949ed4h7aSp&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=5114bb66-3998-43bd-b022-20f72bad94e3-1&algo_pvid=5114bb66-3998-43bd-b022-20f72bad94e3&transAbTest=ae803_4

---

- 4 Channel Bi-Directional Logic Level Shifter Converter 3.3V-5V Logics Level Converter
- $ 0.25
- https://www.aliexpress.com/item/5-Sets-4-Channel-Bi-Directional-Logic-Level-Shifter-Converter-3-3V-5V-Logics-Level-Converter/32848959234.html?spm=2114.search0104.3.2.6d4e2850Eu0I2U&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=094347ef-1172-4a1a-a7ef-c9e773d14bf9-0&algo_pvid=094347ef-1172-4a1a-a7ef-c9e773d14bf9&transAbTest=ae803_4

---

- 1PCS LCD1602 1602 module green screen 16x2 Character LCD Display Module.1602 5V green screen and white code for arduino
- $ 1.15
- https://www.aliexpress.com/item/1PCS-LCD1602-1602-module-green-screen-16x2-Character-LCD-Display-Module-1602-5V-green-screen-and/32511014601.html?spm=2114.search0104.3.3.62dd467ePZvqBS&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=26e40325-e1a7-4578-aba7-82c972c54083-0&algo_pvid=26e40325-e1a7-4578-aba7-82c972c54083&transAbTest=ae803_4

---

- 2 Pack Brand New SUPER Big Capacity AA 1.5V lithium iron batteries.High power Long shelf life digital Camera, radio ba
- $ 3.56
- https://www.aliexpress.com/item/4pack-Brand-New-SUPER-Big-Capacity-AA-1-5V-lithium-iron-batteries-High-power-Long-shelf/32797360857.html?spm=2114.search0104.3.2.56ea2481ZcuRtZ&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=51701e1b-58f6-48f3-8f10-b921fe9e9e89-0&algo_pvid=51701e1b-58f6-48f3-8f10-b921fe9e9e89&transAbTest=ae803_4

---

- AA Size Power Battery Storage Case Box Holder Leads With 2 Slots
- $ 0.58 
- https://www.aliexpress.com/item/AA-Size-Power-Battery-Storage-Case-Box-Holder-Leads-With-1-2-3-4-Slots/32818907820.html?spm=2114.search0104.3.1.ff0543fdDNmUl3&ws_ab_test=searchweb0_0,searchweb201602_3_10320_10065_10068_10547_319_10548_317_10696_453_10084_454_10083_10618_431_10304_10307_10820_10821_537_10302_536_10843_10059_10884_5736015_10887_100031_10319_321_322_10103_5736115,searchweb201603_70,ppcSwitch_0&algo_expid=354096f6-633a-46ac-98cb-a2b1f7b8ef82-0&algo_pvid=354096f6-633a-46ac-98cb-a2b1f7b8ef82&transAbTest=ae803_4

**Total Costs: $ 9.60** 

**50% Rule of Thumb: $ 19.2** (Direct Costs, Gross Margin, Average Discount)

**Anmerkung:**
Da die Auswahl der Komponenten in erster Linie unter dem Gesichtspunkt der einfachen Handhabe und Verfügbarkeit getroffen wurde, ist jene Rechnung nur als Beispielrechnung anzusehen. Zudem wurde nicht berücksichtigt, dass alle Komponenten in einer smart watch verbaut werden sollen    

### 6.4 Business Model

 ![Image of components](/images/healthcoin.businessmodelcanvas.jpg)

# Sonstiges

## Kritik an Cocomo (Constructive Cost Model)

- devops werden nicht berücksichtigt (via k8s deployen, infura Zugang besorgen)
- Regressionsdaten sind veraltet
- Boehm hat die Regression mit 64 bzw 161 Messungen durchgeführt. Für so ein komplexes Problem sind das viel zu wenige Messungen.
- Derekt Jones kam zu anderen Ergebnissen, so hat boehm z.B. die outlier nicht berücksichtigtg (http://shape-of-code.coding-guidelines.com/2016/05/19/cocomo-how-not-to-fit-a-model-to-data/)
- Derek Jones hat Fehler in der orginalen Analyse aufgedeckt (http://shape-of-code.coding-guidelines.com/2016/05/19/cocomo-how-not-to-fit-a-model-to-data/)
- Annahme der Linearität nicht bewiesen?
