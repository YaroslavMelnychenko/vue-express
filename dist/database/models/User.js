const Sequelize = require('sequelize');
const db = require('../sequelize');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING(255)
    },
    password: {
        type: Sequelize.STRING(255)
    }
});

module.exports = User;