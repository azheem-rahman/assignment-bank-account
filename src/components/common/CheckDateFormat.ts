const CheckDateFormat = (date: string): boolean => {
  // check length YYYYMMDD
  if (date.length !== 8) {
    return false;
  }

  // check no non-numeric characters
  const dateNumber = Number(date);
  if (isNaN(dateNumber) || !Number.isInteger(dateNumber)) {
    return false;
  }

  // check valid month, day
  const dateCharArr = date.split("");
  let yearArr: string[] = [];
  let monthArr: string[] = [];
  let dayArr: string[] = [];
  dateCharArr.forEach((char, index) => {
    if (index < 4) {
      yearArr.push(char);
    } else if (index < 6) {
      monthArr.push(char);
    } else if (index < 8) {
      dayArr.push(char);
    }
  });

  const year = Number(yearArr.join(""));
  const month = Number(monthArr.join(""));
  const day = Number(dayArr.join(""));
  if (day > 31) {
    return false;
  }
  if (month > 12) {
    return false;
  }

  return true;
};

export default CheckDateFormat;
