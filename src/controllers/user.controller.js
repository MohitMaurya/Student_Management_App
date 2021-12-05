const express = require("express");
const router = express.Router();
const User = require('../models/user.model');

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send({ user });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send({ users });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({ user });
    }
    catch (err) {
        return res.status(400).send({ err });
    }
})

module.exports = router;