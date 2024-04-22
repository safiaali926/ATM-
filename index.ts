import inquirer from 'inquirer';
let myBalance = 20000;
let myPin = 9876;

let pinAnswer = await inquirer.prompt([{
    name: 'pin',
    message: 'Enter your pin',
    type: 'number',
}])

if (pinAnswer.pin === myPin) {
    console.log('Correct pin code!!!');

    let operationAns = await inquirer.prompt(
        [{
            name: 'operation',
            message: 'Please Select option',
            type: 'list',
            choices: ['with draw', 'check balance']
        }]
    );
    console.log(operationAns);

    if (operationAns.operation === "with draw") {
        let amountAns = await inquirer.prompt([{
            name: 'amount',
            message: 'Enter your amount:',
            type: 'number',
        }])
        {
            console.log(amountAns.amount);
        }
        myBalance -= amountAns.amount;

        console.log('Your remaining balance is: ' + myBalance)

        }
    
    else if (operationAns.operation === 'check balance') {
        console.log('Your balance is: ' + myBalance)
    }
}

else {
    console.log('Incorrect pin number');
}




// if(operationAns.amountAns > myBalance) 
//     console.log('Your balance is less!!!')

