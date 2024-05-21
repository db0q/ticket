const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/*', function (request, response, next) {
    let fileName =  __dirname + '/../data' + request.url;
    console.log(fileName);
    fileName = path.resolve(fileName);
    console.log(fileName);
    return response.sendFile(fileName);
})

module.exports = router;