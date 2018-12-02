import { PersonFactory } from '../../src/patterns/factory/factory';
import { Adult } from '../../src/patterns/factory/adult';
import { Pensioner } from '../../src/patterns/factory/pensioner';

it('Factory generates Adult object when age is 64', () => {
  const person = PersonFactory.createPerson(64);
  expect(person).toBeInstanceOf(Adult);
})

it('Factory generates Pensioner object when age is 65', () => {
  expect(PersonFactory.createPerson(65))
  .toBeInstanceOf(Pensioner);
})