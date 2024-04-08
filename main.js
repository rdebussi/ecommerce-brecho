const connection = require("./database/database")
const express = require("express")
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
const Product = require("./database/product")



connection
    .authenticate()
    .then(() => {
        console.log("ok")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })


app.get("/", (req, res) => {
    Product.findAll({raw: true, order:[
        ['id','asc']
    ]}).then(products => {
        res.render("index.ejs", {
            products: products
        })
    })
})


app.get("/admin/products", (req, res) => {
    Product.findAll({raw: true, order:[
        ['id','asc']
    ]}).then(products => {
        res.render("products.ejs", {
            products: products
        })
    })
})

app.get("/admin/formProduct", (req, res) => {
        res.render("formProduct.ejs")

})


app.listen(8080,()=>{console.log("app rodando!")})