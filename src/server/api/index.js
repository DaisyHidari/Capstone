const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');

const volleyball = require('volleyball');
apiRouter.use(volleyball);

const usersRouter = require('./users');

// TO BE COMPLETED - set `req.user` if possible, using token sent in the request header
apiRouter.use(async (req, res, next) => {
  const auth = req.header('Authorization');
  
  if (!auth) { 
    next();
  } 
  else if (auth.startsWith('Bearer ')) {
    // TODO - Get JUST the token out of 'auth'
    const token = auth.slice(7);
    
    try {
      const parsedToken = jwt.verify(token, process.env.JWT_SECRET);;
      // TODO - Call 'jwt.verify()' to see if the token is valid. If it is, use it to get the user's 'id'. Look up the user with their 'id' and set 'req.user'
      req.user = decodedToken;
      next();
    } catch (error) {
      next(error);
    }
  } 
  else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with 'Bearer'`
    });
  }
});

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

apiRouter.use((err, req, res, next) => {
    res.status(500).send(err)
  })

module.exports = apiRouter;