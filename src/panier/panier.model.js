const mongoose = require('mongoose');


const PanierSchema = new mongoose.Schema({
    products: [{type: String}],
    // categorie : [{ type: Schema.Types.ObjectId, ref: 'Categorie' }]
});


const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;
