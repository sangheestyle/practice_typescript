import { Adult } from './adult';
import { Pensioner } from './pensioner';

// Deals with object creation without exposing
// the logic of instantiation
export class PersonFactory {
  public static createPerson(age: number) {
    if (age < 65) {
      return new Adult(age);
    } else {
      return new Pensioner(age);
    }
  }
}