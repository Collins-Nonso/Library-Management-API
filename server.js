require("dotenv").config();
const express = require("express");
const connectDB = require("./config/dataBase");

const app = express();
connectDB();

// Middleware
app.use(express.json());

app.use("/authors", require("./routes/authorRoute"));
app.use("/books", require("./routes/bookRoute"));
app.use("/students", require("./routes/studentRoute"));
app.use("/attendants", require("./routes/attendantRoute"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});