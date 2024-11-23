import Input from "../common/Input";

// shows "Please enter interest rules details in <Date>..."
const InterestPrompt = async (): Promise<string> => {
  const userInput = await Input(
    `\nPlease enter interest rules details in <Date> <RuleId> <Rate in %> format\n(or enter blank to go back to main menu):\n`
  );
  console.log(`You entered: ${userInput}\n`);

  return userInput;
};

export default InterestPrompt;
