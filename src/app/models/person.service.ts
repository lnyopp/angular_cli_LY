import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private people: Person[] = [];

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}
  getPerson(): Person[] {
    return this.people;
  }
}
