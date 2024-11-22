import LaunchPrompt from "./components/LaunchPrompt";
import TransactionPrompt from "./components/TransactionPrompt";

const main = async () => {
  console.log("App has started!\n");

  let launchInput = "";

  // show first prompt "Welcome to AwesomeGIC Bank... and capture input"
  // re-prompt if invalid input
  do {
    launchInput = await LaunchPrompt();
  } while (
    launchInput.toUpperCase() !== "T" &&
    launchInput.toUpperCase() !== "I" &&
    launchInput.toUpperCase() !== "P" &&
    launchInput.toUpperCase() !== "Q"
  );

  let input = "";

  while (input === "") {
    switch (launchInput.toUpperCase()) {
      case "T":
        input = await TransactionPrompt();
        break;
      case "I":
        console.log("user entered I");
        break;
      case "P":
        console.log("user entered P");
        break;
      case "Q":
        console.log("user entered Q");
        break;
      default:
        console.log("Invalid operation, please re-enter");
        break;
    }

    if (input === "") {
      input = await LaunchPrompt();
    }
  }
};

main();
