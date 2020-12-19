import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    database: 'Proiect',
    username: 'sa',
    host: 'localhost',
    port: '55892',
    password: '234',  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;