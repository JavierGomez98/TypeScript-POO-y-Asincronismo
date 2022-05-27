export class MyService {

  static instance: MyService | null = null

  private constructor(
    private _name: string
  ) { }

  get name() {
    return this._name
  }

  static create(name: string) {
    if (MyService.instance === null)
      MyService.instance = new MyService(name)

    return MyService.instance
  }
}

const myServ1 = MyService.create('Service 1')
console.log(myServ1.name);
const myServ2 = MyService.create('Service 2')
console.log(myServ2.name);

console.log(myServ1 === myServ2);
