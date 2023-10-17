module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    });
  
    return Contact;
};