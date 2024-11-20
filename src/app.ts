import Input from "./components/Input";

const main = async () => {
  console.log("App has started!");

  const userInput = await Input("Please enter something: ");
  console.log(`You entered ${userInput}`);
};

main();
