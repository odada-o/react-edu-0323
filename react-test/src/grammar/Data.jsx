function Data() {
    // 변수 선언
    let a = 10
    a = 20

    console.log(a)

    const b = 30
    // b = 40 // error: Assignment to constant variable.

    console.log(b)

    const name = '리액트'
    const age = 10
    const visible = true

    const user = {
        name: '리액트',
        age: 10,
        phone: null,
    }

    // 배열 선언
    const array = [1, 2, 3]

    const users = [
        {
            id: 1,
            name: '봄',
            age: 2,
        },
        {
            id: 2,
            name: '여름',
            age: 3,
        },
        {
            id: 3,
            name: '가을',
            age: 1,
        },
    ]

    // null, undefined
    const info = {
        birth: '2021-01-01',
        phone: null,
    }

    console.log(info.birth) // 2021-01-01
    console.log(info.phone) // null
    console.log(info.address) // undefined

    return (
        <div>
            <h1>JS데이터</h1>

            <div>
                <h1>안녕 난 {name}야!</h1>
                <p>{age}년 전에 출시됐어.</p>
                {visible ? <p>보인다!</p> : <p>안보인다!</p>}
                <p>
                    {user.name}의 나이는 {user.age}살이야.
                </p>
                <ul>
                    <li>{array[0]}</li>
                    <li>{array[1]}</li>
                    <li>{array[2]}</li>
                </ul>
                <ul>
                    {array.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <ul>
                    <li>
                        {users[0].name}이는 {users[0].age}살
                    </li>
                    <li>
                        {users[1].name}이는 {users[1].age}살
                    </li>
                    <li>
                        {users[2].name}이는 {users[2].age}살
                    </li>
                </ul>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}이는 {user.age}살
                        </li>
                    ))}
                </ul>

                <ul>
                    <li>{info.birth || '주소 정보 없음'}</li> {/* info.birth 값이 없을 때 '주소 정보 없음' 출력 */}
                    <li>{info.phone || '주소 정보 없음'}</li>
                    <li>{info.address || '주소 정보 없음'}</li>
                </ul>

                <Func1 />
                <Func2 />
                <Func3 />
            </div>
        </div>
    )
}

function Func1() {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

const Func2 = function () {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

const Func3 = () => {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

export default Data
