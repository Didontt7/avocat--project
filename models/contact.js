const { Types } = require("mongoose");
const { Contact } = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        idContact: int,
        idClient:{type:Types.ObjectId , ref:"client"},
        idLawyer:{type:Types.ObjectId , ref:"lawyer"}
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Contact = mongoose.model("contact", schema);
    return Contact;
  };