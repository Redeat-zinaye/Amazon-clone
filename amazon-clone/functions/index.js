const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')(
    "sk_test_51LyT2gIyu56npv8LdYhIfaMVbl33fx0IM2yZnvBHfgs7biy5NRpqoyO4GBVqmQQI6sfcHaZTBkmvpfNFgXulPTgW00TXtA6PYD")

const app = express();

app.use(cors({origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request,response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 'total',
        curreency: 'usd'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
