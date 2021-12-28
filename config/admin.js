module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c07846be521177d8f457cd4a73786fc'),
  },
});
