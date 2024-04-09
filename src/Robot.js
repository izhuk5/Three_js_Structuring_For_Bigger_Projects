export default class Robot {

  constructor(name, legs) {
    this.name = name
    this.legs = legs
  }

  sayHi() {
    console.log(`
    Hello bitches! My name is${this.name}`)
  }
}