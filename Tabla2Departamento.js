module.exports = (sequelize, DataTypes) => {
    const Tabla2Departamento = sequelize.define("tabla2departamento", {
        pais: {
            type: DataTypes.STRING(5),
            primaryKey: true,
        },
        depto: {
            type: DataTypes.STRING(5),
            primaryKey: true,
        },
        nomdepto: {
            type: DataTypes.STRING(250),
        },

    });

    return Tabla2Departamento;






};
