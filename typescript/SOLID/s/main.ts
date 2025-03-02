import { User } from "./User";
import { UserRepository } from "./UserRepository";
const userOne = new User("kg ht ag", "245646");

const userRepository = new UserRepository();

userRepository.addUser(userOne);
console.log("user => ", userRepository.getUsers());
