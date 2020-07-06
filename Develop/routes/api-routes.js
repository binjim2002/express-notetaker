const router = require('express').Router();
const path = require('path');
const fs = require('fs');



const dbPath = function(){
    return path.join(__dirname+'../../db/db.json');
}

const getDbContent = function(){
    const db = fs.readFileSync(dbPath(),'utf8');
    return JSON.parse(db);
}

const writeDbContent = function(data){
    fs.writeFile(dbPath(),JSON.stringify(data), err=> {
        if(err){
            console.log('There was an issue');
            
        }
    });
}

router.get('/api/notes', function(req,res){
    
    res.send(getDbContent());
})

router.post('/api/notes', function(req,res){
    const data = getDbContent();
    // add posted object to data
    req.body.id = Math.random().toString(36).substring(2,9)
    data.push(req.body)
    // write to db.json
    writeDbContent(data);
    // return complete data
    res.send(data);
})


