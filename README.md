
# Healthcoin 

## Funktionsweise

Der Nutzer trägt das mobile Endgerät beispielsweise in Form von einer smart watch während er läuft. Das mobile Endgerät ist via ESP32-DevKitC Board über WiFi mit dem Internet verbunden. Das mobile Endgerät erfasst die Bewegungsdaten mit einem Beschleunigungsmesser und Kreiselkompass. Einmal pro Sekunde werden Bewegungsdaten erfasst. Wenn das mobile Endgerät anhand der Bewegungsdaten auf eine Fitness Aktivität zurückschließen kann, dann bekommt der Nutzer einen Punkt. Wenn der Nutzer eine bestimmte Anzahl von Punkten erreicht hat, dann sendet das mobile Endgerät via HTTP ein Signal an den Server. Der Server wird von einem der Herausgeber der Healthcoins betrieben. Der Server erstellt und signiert eine Blockchain Transaktion, welche dem Nutzer eine Healthcoin zuspricht. Die Transaktion wird via HTTPS an den Blockchain Node Betreiber Infura geschickt. Infura propagiert die Transaktion anschließend im Blockchain Netzwerk. Sobald die Transaktion in die Blockchain eingearbeitet wurde, kann der Nutzer mit einem Wallet seiner Wahl seine Healthcoins verwalten (siehe Bild 2). Der Healthcoin Token Contract ist [hier](https://etherscan.io/token/0x39533ce7589574205f20b34c028fe4f30ab68e3b) einsehbar.       

## Architektur

![Image of architecture](/images/architecture.jpg)

## Schema
![Image of components](/images/healthcoin.components.fritzing.png)

## Komponenten:

- Arduino Mega
- MPU-6050 Accelerometer + Gyro
- Logic-Level-Shifter (5V zu 3.3V)
- Akku
- ESP32-DevKitC
- LCD1602 Display 

**Anmerkung**: 
Die Auswahl der Komponenten wurde in erster Linie unter dem Gesichtspunkt der einfachen Handhabe und Verfügbarkeit getroffen. So ist der Arduino Mega Microcontroller überflüssig, da der ESP32 Microcontroller auf dem ESP32-DevKitC Board zur Ansteuerung des MPU-6050 Moduls ausreicht. Zudem kann das ESP32-DevKitC Development Board durch einen ESP32-WROOM-32 Microcontroller ersetzt werden. Desweiteren ist der Akku üderdimensioniert. 

## Prototyp
![Image of components](/images/healthcoin.components.foto.png)

## Mobiles Wallet zur Verwaltung der Healthcoins

![Image of wallet1](/images/wallet1.png)

## Todo

1. Es sollte eine mobile Applikation implementiert werden, so dass die Appliance nicht auf WiFi angewiesen ist und via Bluetooth über ein Smartphone mit dem Server kommunizieren kann. 
2. Der Nutzer sollte seine Blockchain Adresse eingeben können. Momentan ist die Adresse des Nutzers "hard gecoded" auf dem Server.
3. Der Server Aufruf von der Appliance erfolgt unverschlüsselt via HTTP. Es sollte hier eine beidseitige Authentifizierung statt finden und Daten sollten verschlüsselt versendet werden.
4. Die Funktion, welche auf Basis der Bewegungsdaten auf die Fitness Aktivität schließt, sollte verbessert werden. Momentan wird lediglich geprüft ob die Summe der x,y,z Beschleunigungsdaten einen (durch Ausprobieren bestimmten) Schwellenwert überschreitet. 
5. Die Auswahl der Elektronik Komponenten sollte unter ökonomischen und funktionellen Gesichtspunkten neu durchdacht werden. 

## Geschäftsmodell

 ![Image of components](/images/healthcoin.businessmodelcanvas.jpg)

