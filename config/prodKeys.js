// mongodb+srv://prodDBUser:<password>@cluster0-h1e7h.mongodb.net/test?retryWrites=true
//

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_SECRET,
  mangoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
