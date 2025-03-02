"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const UserRepository_1 = require("./UserRepository");
const userOne = new User_1.User("kg ht ag", "245646");
const userRepository = new UserRepository_1.UserRepository();
userRepository.addUser(userOne);
console.log("user => ", userRepository.getUsers());
