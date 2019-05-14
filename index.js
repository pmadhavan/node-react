const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
const keys = require('./config/keys');
require('./services/passport');
mongoose.connect(keys.mangoURI);
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// mongodb+srv://user:<password>@emaily-ma1ju.mongodb.net/test?retryWrites=true
