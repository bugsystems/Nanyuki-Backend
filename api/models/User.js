module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: type.STRING,
        username : {
            type: type.STRING,
            allowNull: false
        },
        password : {
            type :type.STRING,
            allowNull: false
        }
    })
};