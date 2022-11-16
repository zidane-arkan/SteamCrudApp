import { Sequelize } from "sequelize";

const db = new Sequelize('steam', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;