const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});