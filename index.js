import convertDateMoment from './convertDateMoment.mjs';
import convertDateManual from './convertDateManual.mjs';

// Konversi tanggal menggunakan module moment.
console.log("Konversi tanggal menggunakan moment:");
console.log(convertDateMoment("24-04-2015"));

console.log("");

// Konversi tanggal manual.
console.log("Konversi tanggal manual:");
console.log(convertDateManual("24-04-2015"));