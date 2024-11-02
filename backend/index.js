const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

require("./config/dbConnection");

const productRoute = require("./routes/productsRoutes");
const usersRoute = require("./routes/usersRoutes");
const ordersRoute = require("./routes/ordersRoutes");
const cartRoute = require("./routes/cartRoutes");
const reviewRoute = require("./routes/reviewRoutes");

const port = 8080;

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://vercel.live; img-src 'self'; style-src 'self'");
    next();
});

app.use(express.json());

// Add url-encoded middleware
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


                    
app.use(cors());

// Specify allowed origins if needed
// app.use(cors({ origin: 'http://localhost:3000' }));



app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const corsOptions = {
    origin: (origin, callback) => {
        // Check if the origin is in the allowedOrigins array or if it's undefined (e.g., a same-origin request)
        const isAllowed = allowedOrigins.includes(origin) || !origin;
        callback(null, isAllowed);
    },
    credentials: true, // Enable credentials (e.g., cookies, HTTP authentication)
};

// Use cors middleware with options
app.use(cors(corsOptions));

// Custom middleware for /products route (logging)
app.use("/products", (req, res, next) => {
    next();
});

// Route handlers using Express Router
app.use("/products", productRoute);
app.use("/orders", ordersRoute);
app.use("/users", usersRoute);
app.use("/cart", cartRoute);
app.use("/reviews", reviewRoute);

// Start the Express application
app.listen(port, () => {
    console.log(`App server is listening on port: ${port}`);
});

app.get('/products', (req, res) => {
    res.json({ message: 'CORS enabled' });
  });
