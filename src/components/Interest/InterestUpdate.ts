import {
  mockInterestRules,
  updateMockInterestRules,
} from "../../data/mockData";

const InterestUpdate = (
  inputDate: string,
  inputRuleId: string,
  inputRate: string
) => {
  // check if any existing rules exist on same day
  let exist = false;
  mockInterestRules.forEach((rule) => {
    if (rule.date === inputDate) {
      exist = true;
    }
  });

  // if exist, replace with latest rule
  if (exist) {
    const updatedRules = mockInterestRules.map((rule) =>
      rule.date === inputDate
        ? {
            date: inputDate,
            id: inputRuleId,
            rate: Number(inputRate),
          }
        : rule
    );
    updateMockInterestRules(updatedRules);
  }
  // if does not exit, add to rules
  else {
    mockInterestRules.push({
      date: inputDate,
      id: inputRuleId,
      rate: Number(inputRate),
    });
  }
};

export default InterestUpdate;
