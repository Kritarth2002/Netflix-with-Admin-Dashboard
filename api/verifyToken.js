const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      // console.log(user);

      req.user = user;
      next();
    } catch (err) {
      return res.status(403).json("Token is not valid!");
    }

    //(err, user) => {
    // if (err) res.status(403).json("Token is not valid!");
    // console.log(user);
    // req.user = user;
    // next();
    // });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;
