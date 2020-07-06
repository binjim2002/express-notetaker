const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const dbPath = function(){
    return path.join(__dirname+'../../db/db.json');
}

const getDbContent = function() {
   const dg = fs.readFilesSync(dbPath(), 'utf8');
   return JSON.parse(db);
 
}

const writeDbContent = function(data){
    fs.writeFile(dbPath(),JSON.stringify(data), err=> {
        if(err){
            console.log('There was an issue');
        
        }
    });

}

