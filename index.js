const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
const keys = require('./config/keys');
require('./services/passport');
mongoose.connect(keys.mangoURI);
const app = express();
require('./routes/auth')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// mongodb+srv://user:<password>@emaily-ma1ju.mongodb.net/test?retryWrites=true
