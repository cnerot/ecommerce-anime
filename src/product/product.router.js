const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');

const router = express.Router();
const {
    adminCheck,
    check,
    create,
    remove,
    list,
    update,
    view,
    addToCart
} = Object.assign({}, defaultController.controller('./product/product.model'));

router
    .route('/')
    .get(catchErrors(list))
    .post(catchErrors(adminCheck), catchErrors(create));

router
    .route('/:id')
    .get(catchErrors(check), catchErrors(view))
    .put(catchErrors(adminCheck), catchErrors(check), catchErrors(update))
    .delete(catchErrors(adminCheck), catchErrors(check), catchErrors(remove));


module.exports = router;