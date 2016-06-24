import Sequelize from 'sequelize'

var sequelize = new Sequelize('cb_form', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});