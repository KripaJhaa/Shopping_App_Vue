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

##Screen-sort##
 ![login](./ShoppingPrj_pic/loginPage.png)
  ![add Product](./ShoppingPrj_pic/signUp_Vendor.png)
 ![project Structure](./ShoppingPrj_pic/project_Structure.png)
 ![cart Page](./ShoppingPrj_pic/cart_Page.png)
 ![Product List](./ShoppingPrj_pic/productList.png)
 ![add Product](./ShoppingPrj_pic/addProduct.png)


