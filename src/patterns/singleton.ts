export class MySingleton {
  private static instance: MySingleton;
  private constructor() { }
  static getInstance() {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }

    return MySingleton.instance;
  }

  greet(): string {
    return 'Hello!';
  }
}

const singleton1 = MySingleton.getInstance();
const singleton2 = MySingleton.getInstance();