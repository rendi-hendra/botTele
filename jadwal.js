const moment = require("moment");

moment.locale("id");
const hariNow = moment().format("dddd");
// moment().format("LT")
const jamNow = Number(moment().format("LT"));

function senin() {
  if (jamNow >= Number("07.00") && jamNow <= Number("08.20")) {
    return "Bahasa Inggris";
  }
  if (jamNow > Number("08.20") && jamNow <= Number("09.40")) {
    return "Pkn";
  }
  if (jamNow > Number("09.40") && jamNow <= Number("10.00")) {
    return "Istirahat";
  }
  if (jamNow > Number("10.00") && jamNow <= Number("12.00")) {
    return "Pendidikan Agama";
  }
  return "Turu";
}

function jadwalSekarang() {
  if (hariNow == "Senin") {
    return senin();
  }
}

module.exports = jadwalSekarang;
