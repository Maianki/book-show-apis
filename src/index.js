const express = require('express');
const { connectToDB } = require('./configs/mysqldb');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = express.Router();
const app = express();
const moviesRoutes = require('./routes/moviesRoutes');
const theatreRoutes = require('./routes/theatresRoutes');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
routes.use('/', moviesRoutes);
routes.use('/', theatreRoutes);

require('dotenv').config();

app.use('/', (req, res) => {
    res.send('<h1>Server started!!</h1>');
});

app.listen(process.env.PORT || 3000, async () => {
    await connectToDB();
});
