import { PrismaClient } from "@prisma/client";
import { TodoRepository } from "../src/core/infrastructure/TodoRepository";
import { TodoService } from "../src/core/usecases/TodoServce";

const prisma = new PrismaClient();
const todoRepo = new TodoRepository(prisma);
const todoService = new TodoService(todoRepo);

beforeAll(async () => {
  await prisma.$connect();
});

afterEach(async () => {
  await prisma.todo.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Todo Operations", () => {
  it("should create a new todo", async () => {
    const todo = await todoService.create("Buy Laptop", "Learning Typescript");
    expect(todo.title).toBe("Buy Laptop");
    expect(todo.description).toBe("Learning Typescript");
    expect(todo.completed).toBe(false);
  });

  it("should get all todos from database", async () => {
    await todoService.create("Buy Laptop", "Learning Typescript");
    await todoService.create("Buy bag", "Carrying laptop");
    const todos = await todoService.getAll();
    expect(todos.length).toBe(2);
  });

  it("should get todo by id", async () => {
    const todo = await todoService.create("Buy bag", "Carrying laptop");
    const todoById = await todoService.getById(todo.id);  // Use todoService instead of todoRepo
    expect(todoById.title).toBe("Buy bag");
    expect(todoById.description).toBe("Carrying laptop");
  });

  it("should delete todo by id", async () => {
    const todo = await todoService.create("Buy bag", "Carrying laptop");
    await todoService.deleteById(todo.id);  // Use todoService instead of todoRepo
    
    // Verify deletion
    await expect(todoService.getById(todo.id)).rejects.toThrow("Todo not found");
  });
});
