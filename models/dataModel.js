const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')

class WebData extends Model {}

WebData.init({
    url: {
        type: DataTypes.STRING
    },
    selector: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'webData'
})

module.exports = WebData