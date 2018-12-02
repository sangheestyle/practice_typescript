export interface IWarrior {
  fight: Function;
}

export class Warrior implements IWarrior {
  fight(weapon) {
    console.log(`This warrior fights with ${weapon}`);
  }
}

export interface IHero {
  combat: Function;
}

export class Hero implements IHero {
  combat(weapon) {
    console.log(`This hero uses ${weapon} in combat.`);
  }
}