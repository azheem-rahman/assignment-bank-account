import FollowUpPrompt from "./components/FollowUpPrompt";
import InterestPrompt from "./components/InterestPrompt";
import MainMenu from "./components/MainMenu";
import PrintPrompt from "./components/PrintPrompt";
import QuitApp from "./components/QuitApp";
import TransactionCheck from "./components/TransactionCheck";
import TransactionIDGenerator from "./components/TransactionIDGenerator";
import TransactionPrint from "./components/TransactionPrint";
import TransactionPrompt from "./components/TransactionPrompt";
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
          case "T":
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
            }

            break;
          case "I":
            input = await InterestPrompt();
            break;
          case "P":
            input = await PrintPrompt();
            break;
          default:
            break;
        }
      }
    }
  }
};

main();
