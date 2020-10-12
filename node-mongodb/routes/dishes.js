const route = require("express").Router();

route.get("/", (request, response) => {
    const dishes = request.db.collection("dish");
    dishes.find(
        {}).toArray(
        (err, findResult) => {
            if (!err) {
                response.send(findResult);
            }
    });
});

route.post("/", (request, response) => {
    const dishes = request.db.collection("dish");
    dishes.insertOne(request.body, err => {
        if (!err) {
          response.send(request.body);
        }
    });
});



module.exports = route;
