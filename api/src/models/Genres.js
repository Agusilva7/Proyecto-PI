const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
module.exports =(sequelize)=>{
    sequelize.define("genres",{
        id:{
            type:DataTypes.INTEGER,
            autoincremnt:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
           
        }
    },{timestamps:false})
}