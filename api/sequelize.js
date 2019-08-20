import Sequelize from 'sequelize';
import UserModel from './models/User';

const sequelize = new Sequelize('backend', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
    console,log('Users db and user table have been created')
});

module.exports = User;