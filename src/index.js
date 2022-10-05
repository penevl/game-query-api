const Gamedig = require('gamedig');
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    
    Gamedig.query({
        type: req.headers.type,
        host: req.headers.ip,
        port: req.headers.port,
        requestRules: req.headers.requestRules
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        res.json({
            response : "error",
            errorMsg : error
        })
    });

});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});