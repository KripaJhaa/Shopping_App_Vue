#### Shopping Website in node js

# shopping Website Using Vue js (front-End), Sequelize(Orm), Sqlite3 (Database)

# Tables - 

Vendors, Products, Cart

Products should have vendorId foreignKey

1. Add Product Page

                We should be able to add products
                with the following values - 
                
                a) Product Name
                b) Product Vendor (select)
                c) Product Price

2. Product Listing Page

                Products should show up in form of cards
                with details and an 'add' button

                When we click on 'add', it should be added
                to cart (or, qty++)

                Note: We should be able to filter by vendor

3. Cart Page
                
                A table of all products on cart

                Product                Quantity              Rate       Amount
                mobile                  - 1 +                8000        8000
                laptop                  - 1 +                20000       20000
                xbox                    - 2 +                30000       60000
                                                             TOTAL       88000


NOTES:
'''

Vue Js for Front-end and Axios for Http Calls 
Used Localhost: 8080(port)

'''
Run: Node server.js to run the app

##  Screen-sort


### ProjectFile structure
<img src="https://s8.postimg.cc/ig3r872d1/project_structure.png" width="200px">

### Login page
<img src="https://s8.postimg.cc/9xub3uget/loginpage.png" width="300px">

### Signup Page
<img src="https://s8.postimg.cc/c2eo4ycwl/signup_vendor.png" width="300px">


### Cart Page
<img src="https://s8.postimg.cc/uhz52c3vp/cart_page.png" width="500px">

### Product List Page
<img src="https://s8.postimg.cc/bcvvslk2t/productlist.png" width="300px">

### AddProduct Page
<img src="https://s8.postimg.cc/8isqf47lx/addproduct.png" width="300px">



