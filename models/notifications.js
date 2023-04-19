const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        CratedDate :Date,
        Description:String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Notification = mongoose.model("notification", schema);
    return Notification;
  };