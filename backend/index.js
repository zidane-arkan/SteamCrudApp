import express from 'express';
import db from './database/database.js';

//Declare Express as app varible
const app = express();

//Test Database Connected Or Not
try {
    await db.authenticate();
    console.log("App");
} catch (error) {
    console.log(error);
}
//Listen To App Request
app.listen(3000, () => {
    console.log("Listen In Port 3000");
});




