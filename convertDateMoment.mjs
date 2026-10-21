import moment from 'moment';

// Konversi tanggal menggunakan module moment.
function convertDateMoment(inputDate) {
    const date = moment(inputDate, 'DD-MM-YYYY', true);

    if (!date.isValid()) {
        return "Format tanggal salah!";
    }

    const dateResult = date.format('DD/MM/YYYY');

    return dateResult;
}

export default convertDateMoment;