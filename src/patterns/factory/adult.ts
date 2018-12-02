export class Adult {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  getStatus(): void {
    console.log('Adult');
  }
}