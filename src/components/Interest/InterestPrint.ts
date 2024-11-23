import { mockInterestRules } from "../../data/mockData";

const InterestPrint = () => {
  console.log("Interest rules: ");

  const headers = ["Date    ", "RuleID", "Rate (%)"].join(" | "); // added blankspace for alignment
  console.log(headers);

  const interestRows = mockInterestRules.map(
    (rule) => `${rule.date} | ${rule.id} | ${rule.rate.toFixed(2)}`
  );
  console.log(interestRows.join("\n"));
};

export default InterestPrint;
