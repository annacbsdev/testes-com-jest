const { describe, test, expect, beforeEach } = require("@jest/globals"); 
const TaskManager = require("../src/tasks")

describe("Gerenciador de tarefas", () => {
    let taskManager;
   
    beforeEach(() => {
        taskManager = new TaskManager();
    });

    test("Deve adicionar uma nova tarefa", () => {
        taskManager.addTask("Estudar Jest")
        expect(taskManager.getTasks()).toContain("Estudar Jest")
    })
    test("Deve iniciar uma lista vazia", () => {
        expect(taskManager.getTasks()).toEqual([])
    })
    test("Deve limpar todas as tarefas", () => {
        taskManager.addTask("Comprar pão")
        taskManager.clearTasks()
    })
    test("Deve dar erro ao adicionar tarefa inválida", () => {
        expect(()=> taskManager.addTask(123)).toThrow("Erro ao adicionar tarefa")
    })

    }
)