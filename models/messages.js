const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        content:String,
        timestamp:Date,
        idClient:{type:mongoose.Types.ObjectId , ref:"client"},
        idLawyer:{type:mongoose.Types.ObjectId  , ref:"lawyer"}      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Message = mongoose.model("message", schema);
    return Message;
  };
