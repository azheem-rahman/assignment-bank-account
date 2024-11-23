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
  let monthArr: string[] = [];
  let dayArr: string[] = [];
  for (let index = 4; index < date.length; index++) {
    if (index < 6) {
      monthArr.push(date[index]);
    } else if (index < 8) {
      dayArr.push(date[index]);
    }
  }

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
