import { Cat } from "./08-inheritance"

// function getValue(value: unknown) {
//   return value
// }


// function getValue(value: number | string) {
//   return value
// }

function getValue<myType>(value: myType) {
  const array: myType[] = [value]
  return value
}

getValue<number>(12).toFixed()
getValue<string>('12').toLocaleLowerCase()
getValue<number[]>([]).forEach
const emma = new Cat('Emma', 'Javier')
getValue<Cat>(emma).meow
