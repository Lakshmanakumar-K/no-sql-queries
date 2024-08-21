//For the following question write the corresponding MongoDB queries

// 1. Find all the information about each products
db.products.find().toArray();

// 2. Find the product price which are between 400 to 800
db.products.find({product_price : { $gte:400, $lte:800}},{product_name:1,product_price:1,_id:0});

// 3. Find the product price which are not between 400 to 600
db.products.find({$or : [{product_price:{$lt:400}},{product_price:{$gt:600}}]},{product_name:1,product_price:1,_id:0}).toArray();

// 4. List the four product which are greater than 500 in price
db.products.find({product_price:{$gt:500}},{product_name:1,product_price:1,product_material:1,product_color:1,id:1,_id:0},{limit:4});

// 5. Find the product name and product material of each products 
db.products.find({},{product_name:1,product_material:1,_id:0}).toArray();

// 6. Find the product with a row id of 10
db.products.find({id:"10"},{product_name:1,product_price:1,product_material:1,product_color:1,id:1,_id:0});

// 7. Find only the product name and product material
db.products.find({},{product_name:1,product_material:1,_id:0}).toArray();

// 8. Find all products which contain the value of soft in product material
db.products.find({product_material:"Soft"},{product_name:1,product_price:1,product_material:1,product_color:1,id:1,_id:0});

// 9. Find products which contain product color indigo  and product price 492.00
db.products.find({$or : [{product_color:"indigo"},{product_price:492}]},{product_name:1,product_price:1,product_material:1,product_color:1,id:1,_id:0});

// 10. Delete the products which product price value are 28
db.products.deleteMany({product_price:28});