const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    descripción:{
      type:DataTypes.STRING,
      allowNull:false
    },
    plataformas:{
      type:DataTypes.STRING,
      allowNull:false
    },
    imagen:{
      type:DataTypes.STRING,
      allowNull:false
    },
    fechaDeLanzamiento:{
      type:DataTypes.INTEGER
    },
    rating:{
     type:DataTypes.INTEGER,
     allowNull:false 
    },
    onDB:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    }
  },{timestamps:false});
};
