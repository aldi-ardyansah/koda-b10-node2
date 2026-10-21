import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import convertDateMoment from './convertDateMoment.mjs';
import convertDateManual from './convertDateManual.mjs';

async function index() {
    const rl = readline.createInterface({ input, output });

    try {
        const inputDate = await rl.question(
            'Masukkan tanggal (DD-MM-YYYY): '
        );

        console.log('\nKonversi format tanggal menggunakan moment:');
        console.log(convertDateMoment(inputDate));

        console.log('\nKonversi format tanggal manual:');
        console.log(convertDateManual(inputDate));
    } finally {
        rl.close();
    }
}

index();