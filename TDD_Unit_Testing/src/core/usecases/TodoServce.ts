import { Todo } from "../entity/Todo";
import { ITodoRepository } from "./../infrastructure/ITodoRepository";

export class TodoService {
  constructor(private todoRepo: ITodoRepository) {}

  async create(title: string, description: string): Promise<Todo> {
    if (!title || !description) {
      throw new Error("Title and description are required");
    }
    const todo = await this.todoRepo.create(title, description);
    return todo;
  }

  async getAll(): Promise<Todo[]> {
    const todos = await this.todoRepo.getAll();
    return todos;
  }

  async getById(id: number): Promise<Todo> {
    const todo = await this.todoRepo.getById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return todo;
  }

  async deleteById(id: number): Promise<void> {
    const todo = await this.todoRepo.getById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    await this.todoRepo.deleteById(id);
  }
}
