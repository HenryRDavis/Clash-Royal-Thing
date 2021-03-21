module.exports = {
    checkUser
  };
  
  function checkUser(req, res, next) {
    if (req.jwt && req.jwt.role === 'user') {
      next();
    } else {
      res.status(403).json({message: 'you are not authorized to be here >:('});
    }
  }