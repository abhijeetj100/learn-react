const express = require('express');
// import express from 'express';
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 9000, () => {
    console.log(`Server listening at port 9000`);
});