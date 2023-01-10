const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tickety app!" });
});

// Routes
app.use("/api/users", require("./routes/userRouters"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server strted on port ${PORT}`));
