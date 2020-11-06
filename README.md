# Issue
Calling function import from SAP Cloud SDK returns an empty object, even though the call is successful.

# How to run this app
## 1. Run the CAP service
1. Go to `data-provider` folder
2. Run `npm install`
3. Run `cds watch`
4. Open the browser and enter `http://localhost:4004/catalog/getDeliveryDate()`. Mock delivery date will be returned.

## 2. Run the Cloud SDK app
1. Go to `data-consumer` folter
2. Run `npm install`
3. Run `npm run start:dev`
4. Open the browser and enter `http://localhost:3000/get-delivery`. You will see an empty object returned.


