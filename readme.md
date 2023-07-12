# Node-IPGeolocation

IP Info API is a web service that provides you with information about the details of an IP address by receiving the IP address through a POST request to the / route. 

## Getting Started

To use this API, first, clone the repository:
git clone https://github.com/example/ip-info-api.git ↗


1-npm install

2-run command "node app.js"

POST /

Body:

  {
    "ip": "8.8.8.8" 
  }


## Response

The API will return a JSON response with details about the IP address:

```json
{
  "ip": "8.8.8.8",
  "city": "Mountain View",
  "region": "California",
  "country": "United States",
  "loc": "37.3860,-122.0838",
  "org": "AS15169 Google LLC",
  "postal": "94035"
}