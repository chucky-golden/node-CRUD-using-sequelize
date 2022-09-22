module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define("project", {
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
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        help: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        pimage: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return Project

}