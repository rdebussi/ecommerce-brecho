
const Sequelize = require('sequelize');
const connection = require('./database');

const Product = connection.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    URL: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//sincroniza e cria a tabela no bd, force serve para não forçar a criação caso a tb já exista
// .then é executado após a criação da tabela
Product.sync({force: false}).then(() => {
    console.log('tabela criada com sucesso!')
})

module.exports = Product