const data = [
    {
        product: 'Tempe Goreng',
        buy: 1,
        price: 500
    },
    {
        product: 'Tempe Goreng',
        buy: 5,
        price: 2300
    },
    {
        product: 'Tempe Goreng',
        buy: 10,
        price: 4500
    }
];

const beli = [
    {
        product: 'Tempe Goreng',
        qty: 23
    }
]

let totalHarga = 0;

for (let indexBeli = 0; indexBeli < beli.length; indexBeli++) {
    const filterBarang = data.filter((val) => val.product === beli[indexBeli].product).sort((a, b) => b.buy - a.buy);
    let totalHargaProduk = 0;
    let sisaQty = beli[indexBeli].qty;
    for (let index = 0; index < filterBarang.length; index++) {
        const applyTimes = Math.floor(sisaQty / filterBarang[index].buy);
        totalHargaProduk += applyTimes * filterBarang[index].price;
        sisaQty = sisaQty - (applyTimes * filterBarang[index].buy);
    }
    totalHarga += totalHargaProduk;
}

console.log('Total biaya setelah promo harga: ')
console.log(totalHarga);