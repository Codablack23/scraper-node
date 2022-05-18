const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('scrapper_db', 'user', 'password', {
    dialect: 'sqlite',
    host: './webData.sqlite'
})

module.exports = sequelize