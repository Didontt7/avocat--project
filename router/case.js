
module.exports = app => {
  const Case = require("../controller/case");
var router = require("express").Router();
  

  // Create a new Tutorial
  router.post("/add",Case.create);
  router.put("/Update/:id",Case.Update);
  router.get("/",Case.FindALL);
  router.get("/find/:id",Case.FindOne);
  router.delete("/Delet/:id",Case.DeletOne);
  router.delete("/Delet",Case.DeletALL);
  router.get("/search",Case.search);

  app.use("/case", router);
};

