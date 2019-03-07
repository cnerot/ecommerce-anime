const mongoose = require('mongoose');


const PanierSchema = new mongoose.Schema({
    user: {type : String},
    products: [{type: String}],
    current: {type: Boolean}
    // categorie : [{ type: Schema.Types.ObjectId, ref: 'Categorie' }]
});


const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;
