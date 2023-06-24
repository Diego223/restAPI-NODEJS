

module.exports = (sequelize, DataTypes) => {
    const Tabla3Persona = sequelize.define("Tabla3Persona", {
      Idpersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
      nombre_completo: {
        type: DataTypes.STRING(100),
      },
      pais: {
        type: DataTypes.STRING(5),
    },
    departamento: {
        type: DataTypes.STRING(5),
    },
    direccion: {
        type: DataTypes.STRING(100),
    },

    });
  
    return Tabla3Persona;
  };