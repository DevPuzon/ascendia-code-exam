const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
 
mongoose.connect('mongodb://localhost:27017/crudDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
 
const itemRoutes = require('./routes/item.route');
app.use('/item', itemRoutes);
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
