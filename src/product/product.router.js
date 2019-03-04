const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');

const router = express.Router();
const {
    check,
    create,
    remove,
    list,
    update,
    view
} = Object.assign({}, defaultController.controller('./product/product.model'));

router
    .route('/')
    .get(catchErrors(list))
    .post(catchErrors(create));

router
    .route('/:id')
    .get(catchErrors(check), catchErrors(view))
    .put(catchErrors(check), catchErrors(update))
    .delete(catchErrors(check), catchErrors(remove));


module.exports = router;