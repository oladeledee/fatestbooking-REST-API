module.exports = (app) => {
    app.use((req, res, next) => {
         throw new err("Invalid request", 400);
    });

    app.use((error, req, res, next) => {
         console.log(error)
         if (error ) {
              res.status(error.status).send(response(error.message, null, false));
         } else if (error.name == "CastError") {
              res.status(400).send(response("Invalid id", null, false));
         } else if (error.name == "JsonWebTokenError") {
              res.status(400).send(response(error.message, null, false));
         } else if (error.name == "ValidationError") {
              res.status(400).send(response(error.message, null, false));
         } else if (error.name == "SyntaxError") {
              res.status(400).send(response(error.message, null, false));
         } else {
              res.status(500).send(response(error.message, null, false));
         }
    });

    return app
}