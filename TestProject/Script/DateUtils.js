

function getCurrentDate (format) {
  
  let today = aqDateTime.Today();
  let year = aqDateTime.GetYear(today);
  let month = aqDateTime.GetMonth(today);
  let day = aqDateTime.GetDay(today);
  
  if (format === "Geo") {
    return year + "/" + month + "/" + day;
  } else if(format === "Usa") {
    return  month + "/" + day + "/" + year;
  } else if(format === "Eu") {
    return day + "/" + month + "/" + year;
  } else {
    return "incorrect date format";
  }

}

module.exports = { getCurrentDate };