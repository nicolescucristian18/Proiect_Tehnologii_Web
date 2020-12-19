// ENTITY ALIMENT
import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Aliment = db.define("Aliment", 
{
    AlimentId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    AlimentDenumire:
    {
        type: Sequelize.STRING,
        allowNull: false
    },  
    
    AlimentDataExp:
    {
        type: Sequelize.STRING,
        allowNull: false
    },  

    AlimentCategorie:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    AlimentAlergeni:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    AlimentDisponibilitate:
    {
        type: Sequelize.BOOLEAN
    },

    AlimentNrCalorii:
    {
        type: Sequelize.INTEGER
    },
    ComandaId:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Aliment;