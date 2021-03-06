// client side
const https = require('https');
const mongoose = require('mongoose');
const express = require('express');
// const bp = require('body-parser');

// handles all http routes (post, get, ...)
const items = require('./routes/api/items');
// scraper
const scrape = require('./routes/api/amznScrape');

const app = express();

// Body Parser Middleware (may not be used now)
app.use(express.json());

//get config with all hidden keys
const db = require('./config/keys').mongoURI;

// Connect to Mongo using the Mongoose ORM
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch(e => console.log('MongoDB Err: ' + e));

// use routes 
app.use('/api/items', items)

const port = process.env.PORT || 5000;
// had to change from 3000 since reactstrap inherently runs from 3000

app.use('/api/scrape', scrape)

app.listen(port, () => console.log(`shits listening on port ${port}`));



// we could do all the routes here (app.get, app.post, app.delete... )
// instead we're doing it cleaner