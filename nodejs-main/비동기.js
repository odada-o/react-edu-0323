// promise를 사용하여 비동기 처리하기
const orderCoffee = new Promise((resolve, reject) => {
    console.log('커피를 만드는 중...')
    setTimeout(() => {
        if (Math.random() > 0.5) {
            // 참
            resolve('아메리카노')
        } else {
            // 거짓
            reject('주문을 받지 못했습니다.')
        }
    }, 3000)
})

orderCoffee
    // resolve 함수가 호출되면 then 메서드가 실행된다.
    .then((item) => {
        console.log(`${item}가 만들어졌습니다.`)
    })
    // reject 함수가 호출되면 catch 메서드가 실행된다.
    .catch((error) => {
        console.error(error)
    })
