import inquirer from "inquirer";
let todoList = [];
let conditions = true;

console.log("\n \t  Welcome to Muzamil Ahmed - Todolist Application\n")

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name : "task",
            type: "input",
            message: "Enter your New task:",
        }
    ]);
todoList.push(addTask.task);
  console.log(`${addTask.task} Task Added in Todo-list successfuly`);
  let  addMoretask = await inquirer.prompt([
    {
        name:"addmore",
        type: "confirm",
        message:"Do you want to add more task ?",
    }
  
  ])
  conditions = addMoretask.addmore
}
console.log(`you updated Todo-list :`);