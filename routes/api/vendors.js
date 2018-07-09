const product = require('../../db').Product
const vendor = require('../../db').Vendor
const route = require('express').Router()


route.post('/',(req,res)=>{
    //console.log(JSON.stringify(req.body.name)+" yes i get hit")
    let obj= new vendor({
         name:req.body.name
    })
    obj.save()
    alert("Saved ...")
    res.status(200).json({
        message:"Entered name  "+req.body.name
    })
})



route.get('/vendorlist', (req, res) => {
    vendor.findAll({})
   .then((vendors) => {
           res.status(200).json(vendors)
       })
       .catch((err) => {
           console.log("Error Occured" + err)
       })
})

exports = module.exports = route