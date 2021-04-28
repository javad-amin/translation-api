const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let result = await db.getAllRecords();
        res.json(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:lang/all', async (req, res, next) => {
    try {
        let result = await db.getLangRecords(req.params.lang);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:lang', async (req, res, next) => {
    try {
        let result = await db.getTranslation(req.params.lang, req.query.key);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.post('/', async (req, res, next) => {
    try {
        let result = await db.setTranslation(req.body.lang, req.body.key, req.body.value);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.delete('/', async (req, res, next) => {
    try {
        let result = await db.delTranslation(req.body.lang, req.body.key);
        res.json(result)
    } catch(e) {

        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;