const Sequelize = require('sequelize');
const db = require('../sequelize');

const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING(255)
    },
    lastName: {
        type: Sequelize.STRING(255)
    },
    username: {
        type: Sequelize.STRING(255)
    },
    password: {
        type: Sequelize.STRING(255)
    }
});

module.exports = User;