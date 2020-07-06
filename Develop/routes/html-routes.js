const router = require('express').Router();
const path = require('path');

const createPath = function(name){
    return path.join(__dirname+'../../public/'+name+'.html');
}

router.get('/', function(req,res){
    res.sendFile(createPath(index));
})

router.get('/notes', function(req,res){
    res.sendFile(createPath('notes'));
})

module.exports = router;