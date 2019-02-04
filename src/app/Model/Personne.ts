export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  path: string;
  age: number;
  cin: number;
  constructor(id: number= null,
              cin: number = 0,
              name: string= '',
              firstname: string= '',
              job: string= '',
              path: string= '',
              age: number= 0) {
    this.id = id;
    this.name = name;
    this.cin = cin;
    this.firstname = firstname;
    this.job = job;
    this.age = age;
    this.path = path;
  }
}

