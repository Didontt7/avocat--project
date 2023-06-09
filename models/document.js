const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        Description:String,
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
  
    const Document = mongoose.model("document", schema);
    return Document;
  };
  