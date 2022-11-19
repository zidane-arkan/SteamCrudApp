import express from 'express';
import db from './database/database.js';
import cors from 'cors';
import dlcRouter from './routes/dlcRoutes.js';
import gameRouter from './routes/gameRoutes.js';
import LibraryRouter from './routes/libraryRoutes.js';
import pengembangRouter from './routes/pengembangRoutes.js';
import TransaksiRouter from './routes/transaksiRoutes.js';

//Declare Express as app varible
const app = express();

//Test Database Connected Or Not
try {
    await db.authenticate();
    console.log("Database Connected...");
} catch (error) {
    console.log(error);
}


//Listen To App Request
app.listen(3000, () => {
    console.log("Listen In Port 3000");
});

//Parse json
app.use(cors());
app.use(express.json());

//Listen To DLC Req
app.use('/api/dlc', dlcRouter);
//Listen To Game Req
app.use('/api/game', gameRouter);
//Listen To Library Req
app.use('/api/library', LibraryRouter);
//Listen To Pengembang Req
app.use('/api/pengembang', pengembangRouter);
//Listen To Transaksi Req
app.use('/api/transaksi', TransaksiRouter);
//Listen To User Req
app.use('/api/user', dlcRouter);








