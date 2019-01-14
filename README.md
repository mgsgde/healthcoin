
Folgendes Projekt wurde im Zuge der Vorlesung "Ubiquitäre Informationstechnologien" (gehalten von Prof. Dr. Michael Beigl) erstellt.

# Healthcoin (PoC)

Ein mobiles Endgerät (z.B. in der Form einer smart watch) ausgestattet mit Bewegungssensoren erfasst die Fitness Aktivitäten einer Person und schickt der Person zur Belohnung regelmäßig via Blockchain Protokoll Tokens. Die Tokens heißen "Healthcoins". Das mobile Endgerät und die Healthcoins werden von Unternehmen herausgegeben werden, welche ein Interesse an der Gesundheit der jeweiligen Person haben (z.B. der Arbeitgeber oder die Krankenkasse). Die Healthcoins können gegen Waren und Dienstleistungen eingetauscht werden (z.B. Waren und Dienstleistungen des Unternehmens-Konsortiums, welches die Healthcoins via Blockchain emittiert).    
 
# Komponenten:

- Arduino Mega
- MPU-6050 Accelerometer + Gyro
- Logic-Level-Shifter (5V zu 3.3V)
- Akku
- ESP32-DevKitC
- LCD1602 Display 

**Anmerkung**: 
Die Auswahl der Komponenten wurde in erster Linie unter dem Gesichtspunkt der einfachen Handhabe und Verfügbarkeit getroffen. So ist der Arduino Mega Microcontroller überflüssig, da der ESP32 Microcontroller auf dem ESP32-DevKitC Board zur Ansteuerung des MPU-6050 Moduls ausreicht. Zudem kann das ESP32-DevKitC Development Board durch einen ESP32-WROOM-32 Microcontroller ersetzt werden. Desweiteren ist der Akku üderdimensioniert. 

## Schema
![Image of components](/images/healthcoin.components.fritzing.png)

## Foto
![Image of components](/images/healthcoin.components.foto.png)

# Funktionsweise

(Siehe Bild 1) Der Nutzer trägt das mobile Endgerät beispielsweise in Form von einer smart watch während er läuft. Das mobile Endgerät ist via ESP32-DevKitC Board über WiFi mit dem Internet verbunden. Das mobile Endgerät erfasst die Bewegungsdaten mit einem Beschleunigungsmesser und Kreiselkompass. Einmal pro Sekunde werden Bewegungsdaten erfasst. Wenn das mobile Endgerät anhand der Bewegungsdaten auf eine Fitness Aktivität zurückschließen kann, dann bekommt der Nutzer einen Punkt. Wenn der Nutzer eine bestimmte Anzahl von Punkten erreicht hat, dann sendet das mobile Endgerät via HTTP ein Signal an den Server. Der Server wird von einem der Herausgeber der Healthcoins betrieben. Der Server erstellt und signiert eine Blockchain Transaktion, welche dem Nutzer eine Healthcoin zuspricht. Die Transaktion wird via HTTPS an den Blockchain Node Betreiber Infura geschickt. Infura propagiert die Transaktion anschließend im Blockchain Netzwerk. Sobald die Transaktion in die Blockchain eingearbeitet wurde, kann der Nutzer mit einem Wallet seiner Wahl seine Healthcoins verwalten (siehe Bild 2). Der Healthcoin Token Contract ist [hier](https://etherscan.io/token/0x39533ce7589574205f20b34c028fe4f30ab68e3b) einsehbar.       

**Bild 1:** Architektur

![Image of architecture](/images/architecture.jpg)

**Bild 2:** Mobiles Wallet zur Verwaltung der Healthcoins

![Image of wallet1](/images/wallet1.png)

# Todo

1. Es sollte eine mobile Applikation implementiert werden, so dass die Appliance nicht auf WiFi angewiesen ist und via Bluetooth über ein Smartphone mit dem Server kommunizieren kann. 
2. Der Nutzer sollte seine Blockchain Adresse eingeben können. Momentan ist die Adresse des Nutzers "hard gecoded" auf dem Server.
3. Der Server Aufruf von der Appliance erfolgt unverschlüsselt via HTTP. Es sollte hier eine beidseitige Authentifizierung statt finden und Daten sollten verschlüsselt versendet werden.
4. Die Funktion, welche auf Basis der Bewegungsdaten auf die Fitness Aktivität schließt, sollte verbessert werden. Momentan wird lediglich geprüft ob die Summe der x,y,z Beschleunigungsdaten einen (durch Ausprobieren bestimmten) Schwellenwert überschreitet. 
5. Die Auswahl der Elektronik Komponenten sollte unter ökonomischen und funktionellen Gesichtspunkten neu durchdacht werden. 

# Mehrwert

Die Nutzer können die Healthcoins gegen Waren und Dienstleistungen eintauschen. 

Die Healthcoin kann die Nutzer motivieren sich zu bewegen. Mäßige Bewegung fördert die Gesundheit und reduziert somit die Wahrscheinlichkeit der Nutzer krank zu werden. 

Arbeitgeber profitieren von den ausbleibenden Kosten für die Krankheitstage. 

Krankenkassen profitieren von den ausbleibenden Kosten für Arztbesuche und Medikamente.  

Krankenkassen erhalten mit der Healthcoin eine Kundenschnittstelle. 

Unternehmen und Krankenkassen können Healthcoins für den Vertrieb von Waren und Dienstleistungen nutzen. 

Die Healthcoin kann von Krankenkassen als Vertriebs- und Marketingmaßnahme zur Gewinnung neuer Kunden genutzt werden. 

Die dezentrale Blockchain Technologie kann es der Healthcoin erleichtern sich als Branchenstandard durchzusetzen. Dies kann widerum zu positiven Netzwerkeffekten führen. 

Die Dokumentation von Fitness Aktivitäten auf der Blockchain in Form von Healthcoins kann der erste Schritt sein in Richtung einer digitalen Gesundheitsakte. 


# Cocomo (Constructive Cost Model)

Cocomo(SLOC = 493, Mode: Semi Detached) = 1.4 Person-Months

Quelle: http://groups.umd.umich.edu/cis/course.des/cis525/js/f00/kutcher/kutcher.html 


## Kritik
- devops werden nicht berücksichtigt (via k8s deployen, infura Zugang besorgen)
- Regressionsdaten sind veraltet
- Boehm hat die Regression mit 64 bzw 161 Messungen durchgeführt. Für so ein komplexes Problem sind das viel zu wenige Messungen.
- Derekt Jones kam zu anderen Ergebnissen, so hat boehm z.B. die outlier nicht berücksichtigtg (http://shape-of-code.coding-guidelines.com/2016/05/19/cocomo-how-not-to-fit-a-model-to-data/)
- Derek Jones hat Fehler in der orginalen Analyse aufgedeckt (http://shape-of-code.coding-guidelines.com/2016/05/19/cocomo-how-not-to-fit-a-model-to-data/)
- Annahme der Linearität nicht bewiesen?

# COSYSMO (Constructive Systems Engineering Cost Model)

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

## COSYSMO Ergebnis:
 ![Image of components](/images/healthcoin.cosysmo.jpg)


## Kritik
- Ursprung und Alter der Trainingsdaten zur Bestimmung der Parameter nicht bekannt 
- Güte des Systems nicht spezifiert

# Sonstiges

 ![Image of components](/images/sketch.healthcoin.jpg)

 