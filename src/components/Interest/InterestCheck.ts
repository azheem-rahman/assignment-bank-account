import CheckDateFormat from "../common/CheckDateFormat";

const InterestCheck = (
  inputDate: string,
  inputRate: string
): { valid: boolean; message: string } => {
  // check date should be in YYYYMMDD format
  const validDate = CheckDateFormat(inputDate);
  if (!validDate) {
    return { valid: false, message: "Date should be in YYYYMMDD format" };
  }

  // check interest rate should be a valid number
  const rateNumber = Number(inputRate);
  if (isNaN(rateNumber)) {
    return { valid: false, message: "Interest rate should be a number" };
  }

  // check interest rate should be greater than 0 and less than 100
  if (rateNumber < 0 || rateNumber > 100) {
    return {
      valid: false,
      message: "Interest rate should be greater than 0 and less than 100",
    };
  }

  return { valid: true, message: "" };
};

export default InterestCheck;
