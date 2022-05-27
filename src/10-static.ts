class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => max >= item ? max : item, numbers[0])
  }

  static min(...numbers: number[]): number {
    return numbers.reduce((min, item) => min <= item ? min : item, numbers[0])
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,5,7));
console.log(MyMath.min(1,5,7));
