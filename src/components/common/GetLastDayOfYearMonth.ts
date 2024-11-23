const GetLastDayOfYearMonth = (yearMonth: string): string => {
  // e.g. yearMonth = 202309
  let year = "";
  let month = "";
  for (let index = 0; index < yearMonth.length; index++) {
    if (index < 4) {
      year += yearMonth[index];
    } else {
      month += yearMonth[index];
    }
  }

  const date = new Date(Number(year), Number(month), 0);

  return String(yearMonth + date.getDate());
};

export default GetLastDayOfYearMonth;
