const express = require('express');
const router = express.Router();
const post = require('../models/post')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 };


async function cdb(id) {
    try {
        let idFound = await post.findOne({ id: id });
        if (idFound) return true;
        else return false;
    }
    catch (err) {
        console.log(err);
        return false;
    }

};
router.get('/', (req, res) => {
    res.redirect(301, '/')
})
router.post('/', async (req, res) => {
    if (req.body.link.indexOf('https:') != -1 || req.body.link.indexOf('http:') != -1) {
        do {
            Id =  makeid(5)
        } while (await cdb(Id));
        var data = { ok: true, id : Id, short: 'http://' + req.get('host') + '/' + Id, link: req.body.link},
            postData = new post({
                id: Id,
                short: 'http://' + req.get('host') + '/' + Id,
                link: req.params.data + req.params[0]
            });
            
        postData.save()
        .then(isi => {
            res.json(data)
        })
        .catch(err => {
            res.json({ok: false, message: err.message})
        })

        
        
    }
    else {
        res.send({ ok: false, message: 'You need a http or https, sorry.' })
    }
});

router.get('/:data*', async (req, res) => {
   
    if (req.params.data == 'https:' || req.params.data == 'http:') {
        do {
            Id =  makeid(5);
        } while (await cdb(Id));
        var data = { ok: true, id : Id, short: 'http://' + req.get('host') + '/' + Id, link: req.params.data + req.params[0] },
            postData = new post({
                id: Id,
                short: 'http://' + req.get('host') + '/' + Id,
                link: req.params.data + req.params[0]
            });
            
        postData.save()
        .then(isi => {
            res.json(data)
        })
        .catch(err => {
            res.json({ok: false, message: err.message})
        })

        
        
    }
    else {
        res.send({ ok: false, message: 'You need a http or https, sorry.' })
    }
})

module.exports = router;