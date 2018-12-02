import { IWarrior, Hero, Warrior } from './classes';

// Allows objects or classes to work together
// even though they have different, incompatible
// interfaces.
export class HeroAdapter implements IWarrior {
  type: string;
  name: string;
  constructor(type: string, name: string) {
    this.type = type;
    this.name = name;
  }
  fight() {
    if (this.type === 'Hero') {
      const hero = new Hero();
      hero.combat('sword');
    } else if (this.type === 'Warrior') {
      const warrior = new Warrior();
      warrior.fight('axe');
    } else {
      throw new Error('Please enter Hero or Warrior.');
    }
  }
}