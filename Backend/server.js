const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

// Connect to database
connectDB();

const app = express();

// get data from url
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tickety app!" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Serve Frontend
if (process.env.NODE_ENV == "production") {
  // set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Tickety app!" });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server strted on port ${PORT}`));
