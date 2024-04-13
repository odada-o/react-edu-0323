import React from 'react'

function OrderCoffee({ coffee, time }) {
    const coffeeOrder = new Promise((resolve, reject) => {
        console.log(`${coffee}를 만드는 중...`)

        setTimeout(() => {
            console.log(`${coffee}가 만들어졌습니다.`)
            resolve('아메리카노 준비 완료!') // 성공적으로 커피를 만들었을 때 resolve 함수 호출
        }, time)
    })

    // 프로미스 객체 사용
    coffeeOrder
        // 성공적으로 커피를 만들었을 때 실행할 코드
        .then((coffee) => {
            console.log(coffee)
        })
        // 커피를 만들지 못했을 때 실행할 코드
        .catch((error) => {
            console.error(error)
        })

    return <div>{coffee}</div>
}

export default OrderCoffee
