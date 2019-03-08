const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');

const mongoose = require('mongoose');

const router = express.Router();
const {
    adminCheck,
    userCheck,
    check,
    list,
    view,
    validate
} = Object.assign({}, defaultController.controller('./panier/panier.model'), require('./panier.controller'));

router
    .route('/valid/:id')
    .post(validate);

router
    .route('/')
    .get(catchErrors(userCheck), catchErrors(view));

router
    .route('/all')
    .get(catchErrors(adminCheck), catchErrors(list));



module.exports = router;