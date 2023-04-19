const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const casesSchema = new Schema({
  Name: String,
        Number: String,
        Price: String,
        opponent :String,
        Location:String,
        Gugement :String,
        GDate : { "type": Date, "default": Date.now },
        Description:String,
        idClient:{type:mongoose.Types.ObjectId , ref:"client"},
        idLawyer:{type:mongoose.Types.ObjectId  , ref:"lawyer"}
}, {
  timestamps: true,
});

const Cases = mongoose.model('Cases', casesSchema);

module.exports = Cases;