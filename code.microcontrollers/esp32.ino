#include <WiFi.h>
#include <HTTPClient.h>
 
const char* ssid = "Honor6X2";
int status = WL_IDLE_STATUS;     

void setup() {
  
  Serial.begin(9600);
  
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to open SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid);

    delay(10000);
  }

  Serial.print("You're connected to the network");
}

void loop() {
   if (Serial.available() > 0) {
    
    int signal = Serial.parseInt();

    Serial.println(signal);
   
            if (signal == 1) {

              if ((WiFi.status() == WL_CONNECTED)) {
            
                HTTPClient http;
             
                http.begin("http://35.234.112.203/sendTokens"); 

                int httpCode = http.POST("Empty Body"); 
             
                if (httpCode > 0) { 
                    String payload = http.getString();
                    Serial.println(httpCode);
                    Serial.println(payload);
                  } else {
                  Serial.println("Error on HTTP request");
                }
             
                http.end(); 
              }
            } 
           
   }
 }



 