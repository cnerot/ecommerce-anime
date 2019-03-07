const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');

const mongoose = require('mongoose');

const router = express.Router();
const {
    adminCheck,
    check,
    create,
    remove,
    list,
    update,
    view,
    validate
} = Object.assign({}, defaultController.controller('./panier/panier.model'), require('./panier.controller'));

router
    .route('/valid/:id')
    .post(validate);

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