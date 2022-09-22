module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    })

    return Contact

}