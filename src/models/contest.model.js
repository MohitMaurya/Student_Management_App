const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    deadline: { type: String, required: true },
    tags: [{ type: String, required: false }],
    time: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

const Contest = mongoose.model("contests", contestSchema);

module.exports = Contest;

