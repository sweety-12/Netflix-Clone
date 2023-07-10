const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/movimate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("DB connection is successfull")
})
.catch((err) => {
    console.log(err.message);
});

app.use("/api/user", userRoutes);

app.listen(3000, () => {
    console.log("server started on port 3000")
});