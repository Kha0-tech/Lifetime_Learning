import { Todo } from "../entity/Todo";

export interface ITodoRepository {
  create(title: string, description: string): Promise<Todo>;
  getAll(): Promise<Todo[]>;
  getById(id: number): Promise<Todo | null>;
  deleteById(id: number): Promise<void>;
}
