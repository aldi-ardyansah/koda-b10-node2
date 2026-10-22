import moment from "moment";

function convertDateMoment(inputDate) {
    const date = moment(inputDate, "DD-MM-YYYY", true);

    if (!date.isValid()) {
        return "Format tanggal salah!";
    }

    return date.format("DD/MM/YYYY");
}

export default convertDateMoment;