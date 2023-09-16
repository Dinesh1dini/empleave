const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        // When there's an error, return an error response.
        return res.status(403).json("Token is not valid!");
      }

      // If verification is successful, set the `req.user` object and proceed to the next middleware.
      req.user = user;
      next();
    });
  } else {
    // If there's no authorization header, return an unauthorized response.
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;
