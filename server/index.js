const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const operatorsRouter = require("./routes/operators");
const errorMiddleware = require('./middleware/error-middleware');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))


app.use('/api/operators', operatorsRouter);
app.use(errorMiddleware)

app.get("/api", (req, res) => {
    console.log('ssss');
    res.json({ "names": ["ex", "sah", "th"] });
});




app.listen(5000, () => { console.log("started on 5000") });