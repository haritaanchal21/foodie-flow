# 🍔 QuickBite API

A simple in-memory Food Delivery Order Management System built with **Node.js + Express**, created as part of a backend developer assignment.

## 🛫 Features

- ✅ Place Food Orders
- ✅ View Orders by Email
- ✅ View All Active Orders
- ✅ Cancel Orders
- ✅ Modify Delivery Address
- 📦 In-memory storage (no DB)
- 🧪 Basic test coverage ready


## Run the program

- npm install 
- npm start
## 🚀 To test

✅ Your Actual API Endpoints
Here’s how your routes are structured now:

Function	                    HTTP Method	URL
Place Order	POST	            http://localhost:3000/orders
Get Orders by Email	GET	        http://localhost:3000/orders/user?email=...
View All Orders	GET	            http://localhost:3000/orders
Cancel Order	POST	        http://localhost:3000/orders/cancel
Modify Delivery Address	POST	http://localhost:3000/orders/modify-address


✅ 1. Place Order

curl -X POST http://localhost:3000/orders ^
-H "Content-Type: application/json" ^
-d "{\"name\":\"John Doe\",\"email\":\"harita@synamedia.com\",\"address\":\"Bangalore\",\"items\":[\"Pizza\",\"Coke\"]}"

✅ 2. Get Orders by Email

curl -X GET "http://localhost:3000/orders/user?email=harita@synamedia.com"

✅ 3. Get All Orders

curl -X GET http://localhost:3000/orders

✅ 4. Cancel Order

curl -X POST http://localhost:3000/orders/cancel ^
-H "Content-Type: application/json" ^
-d "{\"email\":\"harita@synamedia.com\",\"orderId\":\"<YOUR_ORDER_ID>\"}"
Replace <YOUR_ORDER_ID> with the actual ID you get when placing an order.

✅ 5. Modify Delivery Address

curl -X POST http://localhost:3000/orders/modify-address ^
-H "Content-Type: application/json" ^
-d "{\"email\":\"harita@synamedia.com\",\"orderId\":\"<YOUR_ORDER_ID>\",\"newAddress\":\"Ranchi\"}"
