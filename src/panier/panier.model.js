const mongoose = require('mongoose');


const PanierSchema = new mongoose.Schema({
    user: {type : String},
    products: [{product: Object, qty: Number}],
    current: {type: Boolean, required: true}
});


const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;
