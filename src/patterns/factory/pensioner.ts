export class Pensioner {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  getStatus(): void {
    console.log('Pensioner');
  }
}