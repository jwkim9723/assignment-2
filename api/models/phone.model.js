module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            validate: { notEmpty: true }
        },
        number: {
            type: Sequelize.STRING,
            validate: { notEmpty: true }
        },
        contactId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
  
    return Phone;
};