const express = require("express");
const router = express.Router()





router.get("/products", (req, res) => {
   res.status(200)
   res.json([
    {
        productName: "iphone15",
        productPrice: "$1300",
    },

    {
        productName: "iphone14",
        productPrice: "$1200",
    },

    {
        productName: "iphone13",
        productPrice: "$1100",

    }
   ])
})

//get a single product//
router.get("/products/:id", (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "iphone15",
            productPrice: "$1300",
        }
    ])
})

//create a product//
router.post("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message : "product has been added successfully"

})
})

//update a product//
router.put("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message : "product has been updated successfully"

    })
})

//delete a product//
router.delete("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: "product has been deleted successfully"
    })
})


module.exports = router