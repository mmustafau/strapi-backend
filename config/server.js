module.exports = ({ env }) => ({
  url: env("HEROKU_URL"),
});

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
// });
