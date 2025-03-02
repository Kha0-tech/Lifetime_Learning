/**
 * Liskov Substituation Principle
 *      A subclass should be able to replace its superclass without breaking the application
 */

import { User } from "./User";
import { Authenticatable } from "./Authenticatable";
import { GuestUser } from "./GhestUser";
const user: Authenticatable[] = [new User("Alice", "asfs")];

const guest: GuestUser[] = [new GhestUser("vist 1")];
