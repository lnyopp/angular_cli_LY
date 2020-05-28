export class Person {
  private firstName: string;
  private lastName: string;
  private age: number;

  // constructor
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //Getters & Setters
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
  public setAge(age: number) {
    this.age = age;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getAge(): number {
    return this.age;
  }
}
