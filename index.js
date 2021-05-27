var express = require ( 'express');
var mongoose= require  ( 'mongoose');
var applicationRouter = require  (  './Router/applicationRouter');
var  studentRouter = require  ( './Router/studentRouter');




const app = express();
//middlewares
app.use(express.json());

//db config
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/fatestbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//routes
app.use('/api/application', applicationRouter);
app.use('/api/student', studentRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

