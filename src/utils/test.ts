const arr = ['a', 'b', 'c']

type ArrayType = (typeof arr)[number]

const aaa: ArrayType = 'd'
console.log(aaa)

const list = [
  { name: 'a', age: 1 },
  { name: 'b', age: 2 }
]

type Person = (typeof list)[number]

type MyType = Person[keyof Person]

const p1: Person = { name: 'a', age: 1, go: true }
const my: MyType = 'b'

type MyType2 = Person[keyof (typeof list)[number]]
