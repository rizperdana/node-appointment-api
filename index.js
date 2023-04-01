const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();


app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize_db.sync({});

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

require('./app/routes/coach.route')(app);

const port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
