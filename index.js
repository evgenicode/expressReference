const express = require('express');
const path = require("path");
const logger = require('./middleware/logger');


const app = express();


// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));