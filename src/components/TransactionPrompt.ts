import Input from "./Input";

const TransactionPrompt = async (): Promise<string> => {
  const userInput = await Input(
    `\nPlease enter transaction details in <Date> <Account> <Type> <Amount> format\n(or enter blank to go back to main menu):\n`
  );
  console.log(`You entered: ${userInput}\n`);

  return userInput;
};

export default TransactionPrompt;
