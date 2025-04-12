import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Config/mongodb.js';
import { cloudinary } from './Config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// API Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database
connectDB();
// cloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/admin',adminRouter)




app.get('/', (req, res) => {
    res.send('API WORKING');
});

// Start Server
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));
