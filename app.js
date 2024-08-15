const express = require('express');
const path = require('path');
const app = express();
const products = require('./products.json');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
  res.render('index', { products: products.nendoroid_figures });
});

// Product detail route
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.nendoroid_figures.find(p => p.id === productId);
  if (product) {
    res.render('product', { product });
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
