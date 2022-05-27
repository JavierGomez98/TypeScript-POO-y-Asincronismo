export class Animal {
  constructor(
    public name: string
  ) { }

  move() {
    console.log('Moving away');
  }

  gereeting(): string {
    return `Hello, I'm ${this.name}`
  }
}

export class Cat extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  meow(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('meow~');
    }
  }
}

const emma = new Cat('Emma', 'Javier')
emma.move()
console.log(emma.gereeting());
emma.meow(3)
console.log(emma.owner);

