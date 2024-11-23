import Input from "./common/Input";

// MainMenu shows "Welcome to AwesomeGIC Bank... and returns user's input"
const MainMenu = async (): Promise<string> => {
  const userInput = await Input(
    "\nWelcome to AwesomeGIC Bank! What would you like to do?\n[T] Input transactions\n[I] Define interest rules\n[P] Print statement\n[Q] Quit\n"
  );
  console.log(`You entered: ${userInput}\n`);

  return userInput;
};

export default MainMenu;
