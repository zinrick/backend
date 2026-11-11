import express from "express";
import bookRoutes from "./routes/bookRoute.js";
import studentRoutes from "./routes/studentRoute.js";

const app = express();

// Middleware muna
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes pagkatapos ng middleware
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}