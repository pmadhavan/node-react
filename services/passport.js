const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleSecret,
      callbackURL: '/auth/google/callback'
    },
    (profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (!existingUser) {
          new User({ googleID: profile.id })
            .save()
            .then(newUser => done(null, user));
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);
