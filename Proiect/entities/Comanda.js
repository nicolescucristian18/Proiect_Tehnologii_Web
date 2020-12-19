import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Comanda = db.define("Comanda", 
{
    ComandaId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ComandaDenumire:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PrietenId:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    AlimentId:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

});

export default Comanda;