const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const Database = require('./database/db.js');
const Contact = require('./routes/contactRoutes.js');
const Booking = require('./routes/bookingRoutes.js');
const Service = require('./routes/serviceRoutes.js');
const Blog = require('./routes/blogRoutes.js');
const Gallery = require('./routes/galleryRoutes.js');
const Menu = require('./routes/menuRoutes.js');
const Comment = require('./routes/commentRoutes.js');
const Banner = require('./routes/bannerRoutes.js');
const Testimonial = require('./routes/testimonialRoutes.js');

app.use(cors())
app.use(express.json())

Database();
app.use('/api/contact', Contact);
app.use('/api/booking', Booking);
app.use('/api/service', Service);
app.use('/api/blog', Blog);
app.use('/api/gallery', Gallery);
app.use('/api/menu', Menu);
app.use('/api/comment', Comment);
app.use('/api/banner', Banner);
app.use('/api/testimonial', Testimonial);

app.listen(port, () => {
  console.log(`Coffee Shop app listening on port ${port}`)
});