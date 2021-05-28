const express= require ('express');
const cors = require('cors');
const mongoose = require('mongoose');               
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded(
    {extended:false}
));
app.use(bodyParser.json());
//db config
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/fatestbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

    //route
    app.use(require('./route/applicationRoute'));
    app.use(require('./route/studentRoute'))
    const port = process.env.PORT || 6000;
    app.listen(port, () => {
      console.log(`Serve at http://localhost:${port}`);
    });
