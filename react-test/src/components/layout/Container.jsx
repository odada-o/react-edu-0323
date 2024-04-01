const ContainerLg = (props) => {
    return <div>{props.children}</div>
}

export const Section = (props) => {
    // 삼항 연산자
    // 조건 ? 참일 때 : 거짓일 때
    const backgroundColor = props.isLightBackground ? 'white' : 'gray.100'
    return <div>{props.children}</div>
}

export default ContainerLg
