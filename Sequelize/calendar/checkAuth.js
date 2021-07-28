const checkAuth = (req, res, next) => {
  // check if the user exists on the session
  if(req.session.user) {
    next(); // If they are logged in, all is good, move on
  } else if(req.path === '/users/login') { // if not logged in, but request is on the login page
    next(); // Allow the users to access the login route
  } else { // if the users are not logged in
    res.status(401).json({ error: "not logged in" });
  }
}

module.exports = checkAuth;