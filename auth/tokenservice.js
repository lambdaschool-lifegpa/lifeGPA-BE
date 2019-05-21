const jwt = require('jsonwebtoken');
const secret = require('../_secrets').jwtSecret;
require('dotenv').config(); 


module.exports = {
  generateToken,
};

//************ GENERATE TOKEN ***************/
function generateToken(user) {
  const payload = {

    id: user.id,
    username: user.username,
  };
  // const secret = "this is our little secret";

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}
