const mongoose = require('mongoose');


const PanierSchema = new mongoose.Schema({
    user: {type : String},
    products: [{type: String}],
    current: {type: Boolean}
});


const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;
