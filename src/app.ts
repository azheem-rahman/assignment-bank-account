import LaunchPrompt from "./components/LaunchPrompt";

const main = async () => {
  console.log("App has started!");

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

  switch (launchInput.toUpperCase()) {
    case "T":
      console.log("user entered T");
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
};

main();
