module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: type.STRING,
        personnel_phone : {
            type: type.STRING,
            allowNull: false
        },
        personnel_password : {
            type :type.STRING,
            allowNull: false
        }
    })
};