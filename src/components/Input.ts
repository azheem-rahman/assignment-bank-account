import readline from "readline";

const Input = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${question}`, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

export default Input;
