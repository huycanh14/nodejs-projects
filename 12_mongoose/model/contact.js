var mongoose = require('mongoose');
var schema = new mongoose.Schema({ ten: 'string', tuoi: 'string' }, {collection: 'contact'});
module.exports = mongoose.model('contact', schema);