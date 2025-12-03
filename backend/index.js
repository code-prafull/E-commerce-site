import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

let port = process.env.PORT || 6000

console.log("Starting server...");
console.log("Port:", port);
console.log("Environment:", process.env.NODE_ENV || "development");

// Check if required environment variables are present
if (!process.env.MONGODB_URL) {
  console.error("ERROR: MONGODB_URL environment variable is not set!");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("ERROR: JWT_SECRET environment variable is not set!");
  process.exit(1);
}

let app = express()

// Add middleware to log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use(express.json())
app.use(cookieParser())

// Enhanced CORS configuration for Google login
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "https://goggleloginmysha.firebaseapp.com", "https://e-commerce-site-backend-n1nb.onrender.com"],
  credentials: true,
  exposedHeaders: ['set-cookie'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    port: port,
    uptime: process.uptime(),
    mongodbUrlPresent: !!process.env.MONGODB_URL
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)

// Connect to database and start server
connectDb().then(() => {
  console.log("Database connection established, starting server...");
  
  const server = app.listen(port,()=> {
    console.log(`Server running on port ${port}`)
  }).on('error', (err) => {
    console.error('Failed to start server:', err);
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Try changing the PORT in your .env file.`);
    }
  });

  // Handle server errors
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
}).catch((error) => {
  console.error("Failed to connect to database:", error);
  console.error("Server will not start due to database connection failure.");
  process.exit(1);
});