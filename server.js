const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = process.env.port || 4000;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MONGO!'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'm listening at PORT ${PORT}`);
})


//savosya23
//mGBtvLKS1A3A2A3X
//mongodb+srv://savosya23:<db_password>@cluster0.eeety.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0