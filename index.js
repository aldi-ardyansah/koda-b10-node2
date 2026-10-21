// Konversi tanggal menggunakan module moment.
console.log("Konversi tanggal menggunakan moment.");

const moment = require('moment');

function convertDateMoment(inputDate) {
    const date = moment(inputDate, 'DD-MM-YYYY', true);

    if (!date.isValid()) {
        return "Format tanggal salah!";
    }

    const dateResult = date.format('DD/MM/YYYY');

    return dateResult;
}

console.log(convertDateMoment("24-04-2015"));

console.log("");

// Konversi tanggal manual.
console.log("Konversi tanggal manual.");

function convertDateManual(inputDate) {
    const potongan = inputDate.split('-');
    if (
        potongan.length !== 3 ||
        potongan[0].length !== 2 ||
        potongan[1].length !== 2 ||
        potongan[2].length !== 4
    ) {
        return "Format tanggal salah!";
    }
    else {
        return potongan.join('/');
    }
}

console.log(convertDateManual("24-04-2015"));