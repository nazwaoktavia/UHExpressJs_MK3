const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    produk: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Silahkan pilih produk']
    },
    jumlah: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah pesanan'],
        min: [1, 'Jumlah pesanan minimal 1']
    },
    totalHarga: {
        type: Number,
        required: true
    },
    pelanggan: {
        type: String,
        required: [true, 'Silahkan isikan nama pelanggan']
    },
    tanggalPesanan: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);
