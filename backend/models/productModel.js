const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },
    sizes: [{
        type: String,
        enum: ["S", "M", "L", "XL"]
    }],
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        default: 1
    },
    imageUrl: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);
