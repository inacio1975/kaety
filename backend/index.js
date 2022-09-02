const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/auth");
const productRoute = require("./routes/auth");
const stripeRoute = require("./routes/auth");
const bp = require('body-parser');

dotenv.config();

mongoose.connect(process.env.MONGO_URL
).then(()=> console.log("Db connection established"))
.catch((err)=> console.log(err));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/stripe", stripeRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running...");
});

