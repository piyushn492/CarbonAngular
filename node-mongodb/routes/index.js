var routes = require("express").Router();
var dishes = require("./dishes");

routes.use("/dishes", dishes);

routes.get("*", (response) => {
  response.send("Invalid Route");
});

module.exports = routes;
