export class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  private addPadding(value: number): string {
    if(value < 10)
      return `0${value}`
    return value.toString()
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days')
      this.day += amount
    if(type === 'months')
      this.month += amount
    if(type === 'years')
      this.year += amount
  }
}

const myDate = new MyDate(2022, 9, 4)
console.log(myDate.printFormat());
