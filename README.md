# Node.js 2

## Mengonversi Format Penanggalan Tanpa Module dan Menggunakan Module Moment.js

### Kode index.mjs
```javascript
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import convertDateMoment from "./convertDateMoment.mjs";
import convertDateManual from "./convertDateManual.mjs";

async function index() {
    const rl = readline.createInterface({ input, output });

    try {
        const inputDate = await rl.question(
            "Masukkan tanggal (DD-MM-YYYY): "
        );

        console.log("\nKonversi format tanggal menggunakan moment:");
        console.log(convertDateMoment(inputDate));

        console.log("\nKonversi format tanggal manual:");
        console.log(convertDateManual(inputDate));
    } finally {
        rl.close();
    }
}

index();
```

### Kode convertDateMoment.mjs
```javascript
import moment from "moment";

function convertDateMoment(inputDate) {
    const date = moment(inputDate, "DD-MM-YYYY", true);

    if (!date.isValid()) {
        return "Format tanggal salah!";
    }

    return date.format("DD/MM/YYYY");
}

export default convertDateMoment;
```

### Kode convertDateManual.mjs
```javascript
function convertDateManual(inputDate) {
    const potongan = inputDate.split("-");

    if (
        potongan.length !== 3 ||
        potongan[0].length !== 2 ||
        potongan[1].length !== 2 ||
        potongan[2].length !== 4 ||
        isNaN(potongan[0]) ||
        isNaN(potongan[1]) ||
        isNaN(potongan[2])
    ) {
        return "Format tanggal salah!";
    }

    const hari = Number(potongan[0]);
    const bulan = Number(potongan[1]);
    const tahun = Number(potongan[2]);

    const tanggal = new Date(tahun, bulan - 1, hari);

    if (
        tanggal.getDate() !== hari ||
        tanggal.getMonth() !== bulan - 1 ||
        tanggal.getFullYear() !== tahun
    ) {
        return "Format tanggal salah!";
    }

    return potongan.join("/");
}

export default convertDateManual;
```