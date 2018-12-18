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



