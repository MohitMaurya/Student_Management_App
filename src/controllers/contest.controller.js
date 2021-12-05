const express = require('express');
const router = express.Router();
const Contest = require('../models/contest.model');

router.post("/", async (req, res) => {
    try {
        const contest = await Contest.create(req.body);
        return res.status(201).send({ contest });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

router.get("/", async (req, res) => {
    try {
        const contests = await Contest.find().lean().exec();
        return res.status(200).send({ contests });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const contest = await Contest.findByIdAndDelete(req.params.id);
        return res.status(200).send({ contest });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

module.exports = router;