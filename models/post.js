const mg = require('mongoose');
const postSch = mg.Schema({
    id: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mg.model('post', postSch);