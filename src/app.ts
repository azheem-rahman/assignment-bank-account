import InterestPrompt from "./components/InterestPrompt";
import MainMenu from "./components/MainMenu";
import PrintPrompt from "./components/PrintPrompt";
import QuitApp from "./components/QuitApp";
import TransactionPrompt from "./components/TransactionPrompt";

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
