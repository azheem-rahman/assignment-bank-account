import Input from "./common/Input";

const PrintPrompt = async (): Promise<string> => {
  const userInput = await Input(
    `\nPlease enter account and month to generate the statement <Account> <Year><Month>\n(or enter blank to go back to main menu):\n`
  );
  console.log(`You entered: ${userInput}\n`);

  return userInput;
};

export default PrintPrompt;
