const TaskManager = require("./tasks")

const taskManager = new TaskManager()

taskManager.addTask("Estudar JS")
taskManager.addTask("Saber digitar corretamente")
taskManager.addTask("Estudar NodeJS")

let tasks = taskManager.getTasks()

tasks.forEach((t, index) => {
    console.log(`${index + 1} - ${t}`)
})