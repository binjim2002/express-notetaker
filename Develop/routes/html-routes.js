const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const dbPath = function(){
    return path.join(__dirname+'../../db/db.json');
}
