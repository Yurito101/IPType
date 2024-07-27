const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.get('/ip/:ip', async (req, res) => {
    const ip = req.params.ip
    const url = `https://ipqualityscore.com/api/json/ip/${process.env.IPQS_APIKEY}/${ip}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (data.vpn === true) {
        res.json({ "proxy": true })
    } else {
        res.json({ "proxy": false })
    };
});

app.listen(8000);