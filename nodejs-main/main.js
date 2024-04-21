hello1()

// 함수선언
// 함수 선언문
function hello1() {
    console.log('hello1')
}

// 함수 표현식
const hello2 = function () {
    console.log('hello2')
    return 'hello2'
}

hello2()

function sum(a, b = 1) {
    return a + b
}
console.log(sum(2))
// 2 + undefined = NaN

const a = sum(1, 2)
console.log(a)

// 객체 구조 분해
const user = {
    name: '겨울',
    age: 2,
}

// user 이름을 출력하는 함수
function getName({ name, age }) {
    // 객체 구조 분해
    // const { name, age } = user

    return name
}
function getEmail({ email = '이메일이 없습니다.' }) {
    return email
}

console.log(getName(user))
console.log(getEmail(user))

// 나머지 매개변수
function sum1(...rest) {
    return rest
}

console.log(sum1(1, 2, 3, 4, 5))

// setTimeout
// setTimeout(콜백함수, 밀리초)
const timeOut = setTimeout(() => {
    console.log('setTimeout')
}, 3000)

// clearTimeout()
clearTimeout(timeOut)

// setInterval
// setInterval(콜백함수, 밀리초)
const interval = setInterval(() => {
    console.log('setInterval')
}, 3000)

const cancleBtn = document.querySelector('#btn')
cancleBtn.addEventListener('click', () => {
    console.log('취소버튼 클릭')
    clearInterval(interval)
})

// 콜백함수
function aa(callback) {
    callback()
    console.log('a')
}

function bb() {
    console.log('b')
}

aa(bb)

// 콜백함수 예제
const sum2 = (a, b, c) => {
    setTimeout(() => {
        return c(a + b)
    }, 1000)
}

sum2(1, 2, (value) => {
    console.log(value)
})

// this
// 일반 함수의 this
function user3() {
    this.firstName = '가을'
    this.lastName = '김'

    return {
        firstName: '겨울',
        lastName: '김',
        // 메소드
        getFullName: () => {
            return `${this.lastName} 
                ${this.firstName}`
        },
    }
}

const u = user3()
console.log(u.getFullName())
