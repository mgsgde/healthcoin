#include "Wire.h" // This library allows you to communicate with I2C devices.
#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

const int MPU_ADDR = 0x68; 

int16_t accelerometer_x, accelerometer_y, accelerometer_z; 

char tmp_str[7]; 

char* convert_int16_to_str(int16_t i) { 
  sprintf(tmp_str, "%6d", i);
  return tmp_str;
}

int points = 0; 
int maxPoints = 10;
float threshold = 8000; 

void setup() {
  Serial.begin(9600);
  Serial1.begin(9600); 

  Wire.begin();
  Wire.beginTransmission(MPU_ADDR); 
  Wire.write(0x6B); 
  Wire.write(0); 
  Wire.endTransmission(true);
  lcd.begin(16, 2);
  lcd.print("Progress (in %)");
}

void loop() {
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x3B); 
  Wire.endTransmission(false); 
  Wire.requestFrom(MPU_ADDR, 7*2, true); 
  
  accelerometer_x = Wire.read()<<8 | Wire.read(); 
  accelerometer_y = Wire.read()<<8 | Wire.read(); 
  accelerometer_z = Wire.read()<<8 | Wire.read(); 

  double value = sqrt(pow(accelerometer_x, 2) + powf(accelerometer_y, 2) + powf(accelerometer_z, 2));

  if (value >= threshold) {
     points = points + 1;
  }

  if (points >= maxPoints) {
    Serial.println("Send signal to esp32.");
    Serial1.print(1);  // send signal to esp32 
    points = 0;
    lcd.setCursor(0, 1);
    lcd.print("Success !!!");
  } else {
     lcd.print("           ");
     lcd.setCursor(0, 1);
     lcd.print(int((float)points / (float)maxPoints * 100));
  }

  delay(1000);
}