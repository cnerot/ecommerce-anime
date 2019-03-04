const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
    name: {type: String},
    // categorie : [{ type: Schema.Types.ObjectId, ref: 'Categorie' }]
});


const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
