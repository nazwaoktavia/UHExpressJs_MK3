const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama produk'],
        unique: true
    },
    harga: {
        type: Number,
        required: [true, 'Silahkan isikan harga produk']
    },
    stok: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah stok produk'],
        min: [0, 'Stok tidak boleh kurang dari 0']
    },
    deskripsi: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Product', ProductSchema);
