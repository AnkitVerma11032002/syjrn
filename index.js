import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToMongo } from './database/database.js';
import courseRoute from './routes/createCourseRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongo();

app.get('/', (req, res) => {
    res.send("Testing Vercel");
});

// Uncomment and configure fileUpload if you need it
// app.use(fileUpload({
//     useTempFiles : false
// }));

app.use("/api/courses", courseRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
