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