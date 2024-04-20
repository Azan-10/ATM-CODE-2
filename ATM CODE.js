import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 123;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PIN:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN.");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select your option:",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the withdrawal amount:",
                type: "list",
                choices: ["1000", "3000", "5000", "10000"]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient funds.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Withdrawal successful. Remaining balance: ${myBalance}`);
        }
    }
    else {
        console.log(`Your balance: ${myBalance}`);
    }
}
else {
    console.log("Invalid PIN number.");
}
