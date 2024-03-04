import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter your first number:"
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Enter your Second number:"
});
const input3 = await inquirer.prompt({
    name: "num3",
    type: "number",
    message: "Enter your Third number:"
});
let total = input1.num1 + input2.num2 + input3.num3;
console.log(total);
