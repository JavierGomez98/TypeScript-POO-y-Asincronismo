export abstract class Animal {
  constructor(
    protected name: string
  ) { }

  move() {
    console.log('Moving away');
  }

  gereeting(): string {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log(`${this.name} grooms itself`)
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
      console.log(`meow~`);
    }
    this.doSomething()
  }

  move() {
    super.move()
    console.log('moving as a dog');
  }
}

const emma = new Cat('Emma', 'Javier')
emma.meow(1)
emma.move()
