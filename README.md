# Healthcoin

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

![Image of components](/images/components.jpg)

# Funktionsweise

(Siehe Bild 1) Der Nutzer trägt das mobile Endgerät beispielsweise in Form von einer smart watch während er läuft. Das mobile Endgerät ist via ESP32-DevKitC Board über WiFi mit dem Internet verbunden. Das mobile Endgerät erfasst die Bewegungsdaten mit einem Beschleunigungsmesser und Kreiselkompass. Einmal pro Sekunde werden Bewegungsdaten erfasst. Wenn das mobile Endgerät anhand der Bewegungsdaten auf eine Fitness Aktivität zurückschließen kann, dann bekommt der Nutzer einen Punkt. Wenn der Nutzer eine bestimmte Anzahl von Punkten erreicht hat, dann sendet das mobile Endgerät via HTTP ein Signal an den Server. Der Server wird von einem der Herausgeber der Healthcoins betrieben. Der Server erstellt und signiert eine Blockchain Transaktion, welche dem Nutzer eine Healthcoin zuspricht. Die Transaktion wird via HTTPS an den Blockchain Node Betreiber Infura geschickt. Infura propagiert die Transaktion anschließend im Blockchain Netzwerk. Sobald die Transaktion in die Blockchain eingearbeitet wurde, kann der Nutzer mit einem Wallet seiner Wahl seine Healthcoins verwalten (siehe Bild 2). Der Healthcoin Token Contract ist [hier](https://etherscan.io/token/0x39533ce7589574205f20b34c028fe4f30ab68e3b) einsehbar.       

Bild 1: Architektur

![Image of architecture](/images/architecture.jpg)

Bild 2: Mobiles Wallet zur Verwaltung der Healthcoins

![Image of wallet1](/images/wallet1.png)

# Todo

- Es sollte eine mobile Applikation implementiert werden, so dass die Appliance nicht auf WiFi angewiesen ist und via Bluetooth über ein smartphone mit dem Server kommunizieren kann. 
- Der Nutzer sollte seine Blockchain Adresse eingeben können. Momentan ist die Adresse des Nutzers "hard gecoded" auf dem Server.
- Der Server Aufruf von der Appliance erfolgt unverschlüsselt via HTTP. Es sollte hier eine beidseitige Authentifizierung statt finden und Daten sollten verschlüsselt versendet werden.
- Die Funktion, welche auf Basis der Bewegungsdaten auf die Fitness Aktivität schließt, sollte verbessert werden. Mometan wird lediglich geprüft ob die Summe der x,y,z Beschleunigungsdaten einen (durch Ausprobieren bestimmten) Schwellenwert überschreitet. 
- Die Auswahl der Elektronik Komponenten sollte unter ökonomischen und funktionellen Gesichtspunkten neu durchdacht werden. 

# Mehrwert

Die Nutzer können die Healthcoins gegen Waren und Dienstleistungen eintauschen. 

Die Healthcoin kann die Nutzer motivieren sich zu bewegen. Mäßige Bewegung fördert die Gesundheit und reduziert somit die Wahrscheinlichkeit der Nutzer krank zu werden. 

Arbeitsgeber profitieren von den ausbleibenden Kosten für die Krankheitstage. 

Krankenkassen profitieren von den ausbleibenden Kosten für Arztbesuch und Medikamente.  

Krankenkassen würden mit der Appliance eine Kundenschnittstelle erhalten. 

Unternehmen und Krankenkassen können Healthcoins für den Vertrieb ihrer eigenen Waren und Dienstleistungen nutzen. 

Die Healthcoin kann von Krankenkassen als Vertriebs- und Marketingmaßnahme zur Gewinnung neuer Kunden genutzt werden. 

Die dezentrale Blockchain Technologie kann es der Healthcoin erleichtern sich als Branchenstandard durchzusetzen. Dies kann widerum zu zu positiven Netzwerkeffekten führen. 

Die Dokumentation von Fitness Aktivitäten auf der Blockchain in Form von Healthcoins kann der erste Schritt in Richtung digitaler Gesundheitsakte sein 



