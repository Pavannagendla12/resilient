const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

AWS.config.update({ region: 'us-east-1' }); // Replace with your AWS region
const s3 = new AWS.S3();
const upload = multer({ dest: 'uploads/' });

// Mock Product Data
let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
];

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Get a product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

// Add a new product
app.post('/products', express.json(), (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Upload product image to S3
app.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    const fileStream = fs.createReadStream(file.path);
    const params = {
        Bucket: 'your-s3-bucket-name', // Replace with your bucket
        Key: file.filename,
        Body: fileStream,
        ContentType: file.mimetype
    };
    s3.upload(params, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        fs.unlinkSync(file.path); // Remove local file after upload
        res.json({ imageUrl: data.Location });
    });
});

app.listen(port, () => {
    console.log(`E-Commerce API running on port ${port}`);
});