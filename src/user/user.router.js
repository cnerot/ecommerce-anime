const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');



const router = express.Router();
const {
  adminCheck,
  userCheck,
  check,
  create,
  remove,
  list,
  update,
  view,
  currentUser
} = Object.assign(require('./user.controller'), defaultController.controller('./user/user.model'));


router
  .route('/currentUser')
  .get(catchErrors(userCheck), catchErrors(currentUser))



router
  .route('/')
  .get(catchErrors(adminCheck), catchErrors(list))
  .post(catchErrors(create));



router
  .route('/:id')
  .get(catchErrors(check), catchErrors(view))
  .put(catchErrors(check), catchErrors(update))
  .delete(catchErrors(check), catchErrors(remove));


module.exports = router;
