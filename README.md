
# Healthcoin 
Folgendes Projekt wurde im Zuge der Vorlesung "Ubiquitäre Informationstechnologien" (gehalten von Prof. Dr. Michael Beigl) erstellt. Mit dem **Unified Design Thinking Model** wurde die Healthcoin Idee erarbeitet.

## 1. Discover: Problemfindung mit der 10+10 Methode 

1. Economy of things (z.B. bezahlt ein Auto automatisch eine E-Ladesäule, Pay per Use Verfahren für Maschinen)
- Engineer: 6
- Managmenet: 3
- Production: 5
- Marketing: 3
- User: 3

---


2. Hardware wallet (arduino speichert private key zur Signierung von Transktionen )
- Engineer: 6
- Managmenet: 10
- Production: 8
- Marketing: 10
- User: 10
- **Existiert bereits.**

---

3. Gerät welches Schritte zählt und bei Erreichen einer Mindest-Schrittanzahl Crypto-Geld an den Nutzer auszahlt.  
- Engineer: 7
- Managmenet: 5
- Production: 7
- Marketing: 8
- User: 7

---

4. Gerät welches Türen öffnet sobald Crypto-Geld überwiesen wurde (z.B. Car Sharing, Hotelzimmer ...) 
- Engineer: 6
- Managmenet: 3
- Production: 4
- Marketing: 4
- User: 3

---

5. Gerät, welches an einem Boxhandschuh befestigt ist und geschwindigkeit und beschleunigung misst.
- Engineer: 9
- Managmenet: 10
- Production: 9
- Marketing: 1
- User: 1

---

6. Gerät welches via GPS Geräte ortet.
- Engineer: 8
- Managmenet: 7
- Production: 7
- Marketing: 7
- User: 8
- **Existiert bereits.**

---

7. LED Weihnachts Beleuchtung, welche einen QR code oder URL anzeigen kann. Der QR code bzw die URL verweisen auf eine Crypto-Adresse, an welche man crypto Geld zahlen kann. Wenn eine Zahlung eintrifft, dann geht die Lichterkette an und ein Lichtspiel wird abgespielt
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

- Feedback von einem Debeka Mitarbeiter: "Krankenkassen unterliegen dem Diskriminierungsverbot und die Appliance diskriminiert unsportliche Menschen."

### 2.4 Market Research

#### 2.4.1 Size of Market & Market Potential

- Aufgrund der Krankenversicherungspflicht sind alle deutsche Staatsangehörige potentielle Kunden der Healthcoin Applikation
- Quelle: https://de.statista.com/statistik/daten/studie/155823/umfrage/gkv-pkv-mitglieder-und-versichertenzahl-im-vergleich/

- alle Krankenversicherungen (Plattform Gedanke)  
- Endkunden im Alter von 18-25 Jahren: 7.286.000 
- Quelle: https://de.statista.com/statistik/daten/studie/1351/umfrage/altersstruktur-der-bevoelkerung-deutschlands/

#### 2.4.2 Growth of Market
- Bevölerkungsgruppe der 18 bis 25 Jährigen wird von Jahr zu Jahr kleiner => Schrumpfender Markt
- Quelle: https://de.statista.com/statistik/daten/studie/248090/umfrage/entwicklung-der-bevoelkerungsstruktur-deutschlands-nach-altersgruppen/


#### 2.4.3 Wettbewerber

- Domain name healthcoin.com ist verfügbar 
- https://heathcoin.com/de-de

- Jede größere Krankenversicherung betreibt ihr eigenes Bonusprogramm. Die Bonusprogramme sind meistens jedoch noch nicht digitalisiert. Es besteht zudem noch kein einheitliches industrieweites Bonusprogramm (wie z.B. paypal im Bereich des Einzelhandels). Healthcoins können sich dank Blockchain Technologie zu einem industrieweiten Standard entwickeln. 
(Quelle: https://www.n-tv.de/ratgeber/Lohnt-sich-das-Punktesammeln-article16795776.html, https://www.healthmiles.de/index.html)

- Techniker Krankenkasse betreibt ein Bonusprogramm
(Quelle: https://www.tk.de/techniker/service/gesundheit-und-medizin/praevention-und-frueherkennung/tk-bonusprogramm/programm-2010356)

- Payback könnte ebenfalls zu einem Wettbewerber werden
(Quelle: https://www.payback.net/)

#### 2.4.4 Problems entering the market

- Angewiesen auf Krankenversicherungen oder Arbeitgeber, welche bereit sind Geld für ihre Kunden bzw. Arbeitnehmer zu zahlen. Ohne jene Parteien sind die Healthcoins nichts wert.   

- Datenschutz im Bereich Gesundheitsdaten ist bedeutend

#### 2.4.5 How do you make Business

- gratis Software	
- Smart Watches werden von Krankenversicherungen finanziert
- "Subscription": 
	- Lizenzgebühren für die Keys mit denen die Healthcoins generiert werden können
"Pay as you go":
	- Transaktionskosten

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

### Funktionsweise

Der Nutzer trägt das mobile Endgerät beispielsweise in Form von einer smart watch während er läuft. Das mobile Endgerät ist via ESP32-DevKitC Board über WiFi mit dem Internet verbunden. Das mobile Endgerät erfasst die Bewegungsdaten mit einem Beschleunigungsmesser und Kreiselkompass. Einmal pro Sekunde werden Bewegungsdaten erfasst. Wenn das mobile Endgerät anhand der Bewegungsdaten auf eine Fitness Aktivität zurückschließen kann, dann bekommt der Nutzer einen Punkt. Wenn der Nutzer eine bestimmte Anzahl von Punkten erreicht hat, dann sendet das mobile Endgerät via HTTP ein Signal an den Server. Der Server wird von einem der Herausgeber der Healthcoins betrieben. Der Server erstellt und signiert eine Blockchain Transaktion, welche dem Nutzer eine Healthcoin zuspricht. Die Transaktion wird via HTTPS an den Blockchain Node Betreiber Infura geschickt. Infura propagiert die Transaktion anschließend im Blockchain Netzwerk. Sobald die Transaktion in die Blockchain eingearbeitet wurde, kann der Nutzer mit einem Wallet seiner Wahl seine Healthcoins verwalten (siehe Bild 2). Der Healthcoin Token Contract ist [hier](https://etherscan.io/token/0x39533ce7589574205f20b34c028fe4f30ab68e3b) einsehbar.       

### Architektur

![Image of architecture](/images/architecture.jpg)

### Schema
![Image of components](/images/healthcoin.components.fritzing.png)

### Komponenten:

- Arduino Mega
- MPU-6050 Accelerometer + Gyro
- Logic-Level-Shifter (5V zu 3.3V)
- Akku
- ESP32-DevKitC
- LCD1602 Display 

**Anmerkung**: 
Die Auswahl der Komponenten wurde in erster Linie unter dem Gesichtspunkt der einfachen Handhabe und Verfügbarkeit getroffen. So ist der Arduino Mega Microcontroller überflüssig, da der ESP32 Microcontroller auf dem ESP32-DevKitC Board zur Ansteuerung des MPU-6050 Moduls ausreicht. Zudem kann das ESP32-DevKitC Development Board durch einen ESP32-WROOM-32 Microcontroller ersetzt werden. Desweiteren ist der Akku üderdimensioniert. 

### Prototyp
![Image of components](/images/healthcoin.components.foto.png)

### Mobiles Wallet zur Verwaltung der Healthcoins

![Image of wallet1](/images/wallet1.png)

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
- Quelle: https://www.aliexpress.com

---

- GY-521 MPU-6050 MPU6050 Module 3 Axis analog gyro sensors+ 3 Axis Accelerometer Module
- $ 0.75 
- Quelle: https://www.aliexpress.com
---

- 4 Channel Bi-Directional Logic Level Shifter Converter 3.3V-5V Logics Level Converter
- $ 0.25
- Quelle: https://www.aliexpress.com
---

- 1PCS LCD1602 1602 module green screen 16x2 Character LCD Display Module.1602 5V green screen and white code for arduino
- $ 1.15
- Quelle: https://www.aliexpress.com
---

- 2 Pack Brand New SUPER Big Capacity AA 1.5V lithium iron batteries.High power Long shelf life digital Camera, radio ba
- $ 3.56
- Quelle: https://www.aliexpress.com
---

- AA Size Power Battery Storage Case Box Holder Leads With 2 Slots
- $ 0.58 
- Quelle: https://www.aliexpress.com

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

## Kommunikations-Protokolle und Technologien

### Interface: Arduino to ESP32 Modul

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


### Interface: Arduino to Accelerometer

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