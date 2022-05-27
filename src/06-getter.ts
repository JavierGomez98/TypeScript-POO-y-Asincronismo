export class MyDate {
  constructor(
    public year: number = 2022,
    public month: number = 5,
    private _day: number = 26
  ) { }

  private addPadding(value: number): string {
    if (value < 10)
      return `0${value}`
    return value.toString()
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days')
      this._day += amount
    if (type === 'months')
      this.month += amount
    if (type === 'years')
      this.year += amount
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0
  }

  get day() {
    return this._day
  }

}

const myDate = new MyDate(2022, 9, 4)
console.log(myDate.day);
console.log('2022', myDate.isLeapYear);

const myDate2 = new MyDate(2004, 9, 4)
console.log('2004', myDate2.isLeapYear);
