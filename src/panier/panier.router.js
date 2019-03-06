const express = require('express');
const catchErrors = require('express-catch-errors');
const defaultController = require('../controller');

const mongoose = require('mongoose');

const router = express.Router();
const {
    check,
    create,
    remove,
    list,
    update,
    view
} = Object.assign({}, defaultController.controller('./panier/panier.model'), require('./panier.controller'));

router
    .route('/valid/:id')
    .post((req, res)=>{
        const Panier = require('./panier.model');
        var p = Panier.findOne({ _id : req.params.id, current: true}, function(err, result) {
            result.current = false;
            result.save();
            res.send(result);
        });
    });





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