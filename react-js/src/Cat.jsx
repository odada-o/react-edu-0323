const Cat = ({ name, age }) => {
    // console.log(props)
    // props = { name: "겨울이", age: "2" }

    // const { name, age } = props
    return (
        <div>
            나의 고양이 이름은 {name} 이고, 나이는 {age}살입니다.
        </div>
    )
}

export default Cat
