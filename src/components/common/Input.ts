import readline from "readline";

const Input = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // question is the string that the user sees in console
    rl.question(`${question}`, (answer) => {
      rl.close();
      resolve(answer); // return user input
    });
  });
};

export default Input;
