import Header from '../components/layout/Header'

function Operator() {
    let a = 1
    let b = 1

    let c = 1
    let d = 1

    let e = 1
    let f = 2

    let g = [1, 2, 3]
    let h = [4, 5, 6]

    let i = { a: 1, b: 2 }
    let j = { c: 5, d: 6 }

    return (
        <div>
            <h1>Operator</h1>
            <div>
                <h2>산술 연산자</h2>
                <p>
                    {a} + {b} = {a + b} {/* 1 + 2 = 3 */}
                </p>
                <p>
                    {a} - {b} = {a - b} {/* 1 - 2 = -1 */}
                </p>
                <p>
                    {a} * {b} = {a * b} {/* 1 * 2 = 2 */}
                </p>
                <p>
                    {a} / {b} = {a / b} {/* 1 / 2 = 0.5 */}
                </p>
                <p>
                    {a} % {b} = {a % b} {/* 1 % 2 = 1 */}
                </p>
            </div>
            <div>
                <h2>증감 연산자</h2>
                <p>
                    c = {c} {/* 1 */}
                </p>
                <p>
                    ++c = {++c} {/* 2 선연산 후출력 */}
                </p>
                <p>
                    c = {c} {/* 2 */}
                </p>
                <p>
                    d = {d} {/* 1 */}
                </p>
                <p>
                    d++ = {d++} {/* 1 선출력 후연산 */}
                </p>
                <p>
                    d = {d} {/* 2 */}
                </p>
            </div>
            <div>
                <h2>비교 연산자</h2>
                <p>
                    {`${e} === ${f} : ${e === f}`} {/* 1 === 2 : false */}
                </p>
                <p>
                    {`${e} !== ${f} : ${e !== f}`} {/* 1 !== 2 : true */}
                </p>
                <p>
                    {`${e} > ${f} : ${e > f}`} {/* 1 > 2 : false */}
                </p>
                <p>
                    {`${e} < ${f} : ${e < f}`} {/* 1 < 2 : true */}
                </p>
                <p>
                    {`${e} >= ${f} : ${e >= f}`} {/* 1 >= 2 : false */}
                </p>
                <p>
                    {`${e} <= ${f} : ${e <= f}`} {/* 1 <= 2 : true */}
                </p>
            </div>
            <div>
                <h2>논리 연산자</h2>
                <p>{`true && true = ${true && true}`}</p> {/* 두 조건이 모두 참일 경우 true 반환 */}
                <p>{`true && false = ${true && false}`}</p>{' '}
                {/* 두 조건 중 하나가 거짓이므로 첫 번째 거짓인 값인 false 반환 */}
                <p>{`true || false = ${true || false}`}</p> {/* 두 조건 중 하나라도 참일 경우 true 반환 */}
                <p>{`false || false = ${false || false}`}</p> {/* 두 조건이 모두 거짓일 경우 false 반환 */}
                <p>{`!true = ${!true}`}</p> {/* 부정연산자 : 조건이 참일 경우 false 반환 */}
                <p>{`!false = ${!false}`}</p> {/* 부정연산자 : 조건이 거짓일 경우 true 반환 */}
            </div>
            <div>
                <h2>조건 연산자</h2>
                <p>{`true ? '참' : '거짓' = ${true ? '참' : '거짓'}`}</p> {/* 조건이 참일 경우 '참' 반환 */}
                <p>{`false ? '참' : '거짓' = ${false ? '참' : '거짓'}`}</p> {/* 조건이 거짓일 경우 '거짓' 반환 */}
            </div>
            <div>
                <h2>전개 연산자</h2>
                <p>{`[...g, ...h] = ${[...g, ...h]}`}</p> {/* [1, 2, 3, 4, 5, 6] */}
                <p>{`{...i, ...j} = ${JSON.stringify({ ...i, ...j })}`}</p> {/* {a: 1, b: 2, c: 5, d: 6} */}
                {/* JSON.stringify() : 객체를 문자열로 변환 */}
                {/* 스트링어파이 */}
            </div>
        </div>
    )
}

export default Operator
