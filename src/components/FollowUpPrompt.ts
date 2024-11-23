import Input from "./common/Input";

const FollowUpPrompt = async (): Promise<string> => {
  const userInput = await Input(
    "\nIs there anything else you'd like to do?\n[T] Input transactions\n[I] Define interest rules\n[P] Print statement\n[Q] Quit\n"
  );
  console.log(`You entered: ${userInput}\n`);

  return userInput;
};

export default FollowUpPrompt;
