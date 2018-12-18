# Healthcoin

- Mobiles Endgeräte welches Fitness Aktivität von einer Person trackt und der Person zur Belohnung via Blockchain Tokens ("Healthcoins") oder Krypto Geld zuschickt. 

- Sender sind Unternehmen welche Interesse an der Gesundheit von der jeweiligen Person haben. (Arbeitgeber, Krankenkasse)

- => Ein digitaler Wegbereiter für Fitnesstraining, Vertriebsaktionen und digitale Transaktionen aller Art.
 
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

![Image of architecture](/images/architecture.jpg)

- ** Prosa text
- ** Video
- ** bild von etherscan 
![Image of etherscan](/images/etherscan.png)

- ** bild von app  
![Image of wallet1](/images/wallet1.png)


# Todo

- app implementieren, sodass appliance via bluetooth (statt wifi) über eine smartphone app mit dem server kommunizieren kann. 
- verschüsselung
- schrittzähl algorithmus verbessern
- passendere und billigere Komponenten verbauen, so dass es in eine smart watch passt 

# Mehrwert

- Kunde, Arbeitsgeber, Krankenkassen: HealthCoins als Anreiz für gesundheitsbewussten Lebensst

- Unternehmen, Krankenkassen: Umtausch von HealthCoins in Value-Added Produkte/Services und/oder in
Fiat-/Kryptogeld 
	- Funktioniert sowohl Unternehmensspezifisch wie auch als Branchenstandard.  

- Ärzte: (optional) Dokumentation von gesundheitsbewusster Aktivität auf der Blockchain möglich => Digital Health Record 



