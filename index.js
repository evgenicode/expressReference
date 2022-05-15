const express = require('express');
const path = require("path");
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();


// Init middleware
app.use(logger);

// Get All Members
app.get('/api/members', (inRequest, inResponse) => {
  inResponse.json(members);
});

// Get Single Member
app.get('/api/members/:id', (inRequest, inResponse) => {
  inResponse.json(members.filter(item => item.id === parseInt(inRequest.params.id)));
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));