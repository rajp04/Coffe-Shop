const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const Database = require('./database/db.js');
const Contact = require('./routes/contactRoutes.js');
const Booking = require('./routes/bookingRoutes.js');

app.use(cors())
app.use(express.json())

Database();
app.use('/api/contact', Contact);
app.use('/api/booking', Booking);

app.listen(port, () => {
  console.log(`Coffee Shop app listening on port ${port}`)
});