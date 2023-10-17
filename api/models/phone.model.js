module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        number: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        contactId: {
            allowNull: false,
            type: Sequelize.INTEGER,
        }
    });
  
    return Phone;
};