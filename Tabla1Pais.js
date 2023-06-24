

module.exports = (sequelize, DataTypes) => {
    const Tabla1Pais = sequelize.define("tabla1pais", {
      pais: {
        type: DataTypes.STRING(5),
        primaryKey: true,
    },
      nompais: {
        type: DataTypes.STRING(250),
        allowNull: false,
      }
    });
  
    return Tabla1Pais;
  };

// a. Tabla 1 Pais
// i. Pais Varchar(5) Llave
// ii. NomPais Varchar(250)

// b. Tabla 2 Departamento
// i. Pais varchar(5) Llave
// ii. Depto Varchar(5) Llave
// iii. NomDepto Varchar(250)

// c. Persona
// i. Idpersona int (llave)
// ii. Nombre completo varchar(100)
// iii. Pais varchar(5)
// iv. Departamento varchar(5)
// v. Dirección varchar(100)