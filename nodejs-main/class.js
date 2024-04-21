// 생성자 함수
// const animals = ['개', '고양이', '토끼']

// const animals = new Array('개', '고양이', '토끼')
// console.log(animals)
// console.log(animals.length)

// // 스타벅스 메뉴 출력
// const starbucks = new Array('아메리카노', '라떼', '마끼아또')

// Array.prototype.Menu = function () {
//     console.log(this)
// }

// starbucks.Menu() // ['아메리카노', '라떼', '마끼아또', Menu: [Function]]

// const mega = new Array('메가리카노', '메가떼', '메가치노')
// mega.Menu() // ['메가리카노', '메가떼', '메가치노', Menu: [Function]]

// const americano = {
//     name: '아메리카노',
//     price: 4000,
//     order: function () {
//         return `${this.name}는 ${this.price}원 입니다.`
//     },
// }

// const latte = {
//     name: '라떼',
//     price: 5000,
// }
// console.log(americano.order())
// console.log(americano.order.call(latte)) // 라떼는 5000원 입니다.

// prototype 이용한 생성자 함수
// function OrderCoffee(name, price) {
//     this.name = name
//     this.price = price
// }

// OrderCoffee.prototype.order = function () {
//     return `${this.name}는 ${this.price}원 입니다.`
// }

// const americano = new OrderCoffee('아메리카노', 4000)
// console.log(americano) // OrderCoffee { name: '아메리카노', price: 4000 }
// console.log(americano.order()) // 아메리카노는 4000원 입니다.

// const latte = new OrderCoffee('라떼', 5000)
// console.log(latte.order()) // 라떼는 5000원 입니다.

// class 문법
class OrderCoffee {
    // 생성자 함수 역할
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    // prototype 역할
    order() {
        return `${this.name}는 ${this.price}원 입니다.`
    }
    making() {
        return `${this.name}를 만들고 있습니다.`
    }
    made() {
        return `${this.name}가 완성되었습니다.`
    }
}

const americano = new OrderCoffee('아메리카노', 4000)
console.log(americano.order())
console.log(americano.making())
console.log(americano.made())

const latte = new OrderCoffee('라떼', 5000)
console.log(latte.order())
console.log(latte.making())
console.log(latte.made())

// 상속
class SpecialCoffee extends OrderCoffee {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
    special() {
        return `오늘의 스페셜 커피는 ${this.name}입니다.`
    }
}

const ainS = new SpecialCoffee('아인슈페너', 6000, 'tall')
console.log(ainS.special()) // 오늘의 스페셜 커피는 아인슈페너입니다.
console.log(ainS.order()) // 아인슈페너는 6000원 입니다.
