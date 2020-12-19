// ENTITY PRIETEN
import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Prieten = db.define("Prieten", 
{
    PrietenId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    PrietenNume: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    PrietenTip:
    {
        type: Sequelize.STRING,
        allowNull: false
    },  
    
    PrietenAlergii:
    {
        type: Sequelize.STRING,
        allowNull: false
    }  
});

export default Prieten;