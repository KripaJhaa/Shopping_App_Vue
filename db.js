const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shop_pass', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5,
    },
      storage: './shop.db',
      logging:false
})

///schema of User Table
const Vendor = db.define('vendors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

///schema of Product Table
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

const Cart = db.define('carts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity:{ 
        type:Sequelize.INTEGER
    }
})

const User = db.define('user', {
    username: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Product.belongsTo(Vendor)
Cart.belongsTo(Product)
Cart.belongsTo(User)

db.sync()
    .then(() =>{ 
        force = true    
        console.log("Database has been synced")
    })
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {  
    Product,
    Vendor,
    Cart,
    User
}