import FollowUpPrompt from "./components/FollowUpPrompt";
import InterestCheck from "./components/Interest/InterestCheck";
import InterestPrint from "./components/Interest/InterestPrint";
import InterestPrompt from "./components/Interest/InterestPrompt";
import InterestUpdate from "./components/Interest/InterestUpdate";
import MainMenu from "./components/MainMenu";
import PrintPrompt from "./components/Print/PrintPrompt";
import QuitApp from "./components/QuitApp";
import TransactionCheck from "./components/Transaction/TransactionCheck";
import TransactionIDGenerator from "./components/Transaction/TransactionIDGenerator";
import TransactionPrint from "./components/Transaction/TransactionPrint";
import TransactionPrompt from "./components/Transaction/TransactionPrompt";
import { mockTransactions } from "./data/mockData";

const main = async () => {
  console.log("App has started!\n");

  let input = "";

  // show main menu "Welcome to AwesomeGIC Bank... and capture input"
  // quit app if input = Q or q
  while (input.toUpperCase() !== "Q") {
    input = await MainMenu();

    if (input.toUpperCase() === "Q") {
      QuitApp();
    } else {
      while (input !== "") {
        // show sub-menus
        switch (input.toUpperCase()) {
          case "T": {
            input = await TransactionPrompt();
            if (input === "") {
              break;
            }
            const inputArr = input.split(" ");

            const inputDate = inputArr[0];
            const inputAccount = inputArr[1];
            const inputType = inputArr[2];
            const inputAmount = inputArr[3];

            const checkTransaction = TransactionCheck(
              inputDate,
              inputAccount,
              inputType,
              inputAmount
            );

            if (!checkTransaction.valid) {
              console.log(`Invalid Transaction: ${checkTransaction.message}`);
              input = "T"; // set input to T so that transaction sub-menu is re-prompted
            } else {
              mockTransactions.push({
                account: inputAccount,
                date: inputDate,
                id: TransactionIDGenerator(inputDate),
                type: inputType.toUpperCase(),
                amount: Number(inputAmount),
              });
              TransactionPrint(inputAccount);
              input = await FollowUpPrompt();
              if (input.toUpperCase() === "Q") {
                QuitApp();
              }
            }

            break;
          }
          case "I": {
            input = await InterestPrompt();
            if (input === "") {
              break;
            }
            const inputArr = input.split(" ");

            const inputDate = inputArr[0];
            const inputRuleId = inputArr[1];
            const inputRate = inputArr[2];

            const checkInterest = InterestCheck(inputDate, inputRate);

            if (!checkInterest.valid) {
              console.log(
                `Invalid Interest Definition: ${checkInterest.message}`
              );
              input = "I"; // set input to I so that interest sub-menu is re-prompted
            } else {
              InterestUpdate(inputDate, inputRuleId, inputRate);
              InterestPrint();
              input = await FollowUpPrompt();
              if (input.toUpperCase() === "Q") {
                QuitApp();
              }
            }
            break;
          }
          case "P": {
            input = await PrintPrompt();
            break;
          }
          default:
            break;
        }
      }
    }
  }
};

main();
