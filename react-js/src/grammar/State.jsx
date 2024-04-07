import React, { useState } from 'react'
import switchOn from '../assets/images/switch-on.svg'
import switchOff from '../assets/images/switch-off.svg'
import { LiaUmbrellaBeachSolid } from 'react-icons/lia'
import { FaHouseChimneyWindow } from 'react-icons/fa6'
import { SiHappycow } from 'react-icons/si'
import { Tb360View } from 'react-icons/tb'
import styled from 'styled-components'
import { IoClose, IoMenu } from 'react-icons/io5'

function State() {
    // useState() 함수를 사용하여 상태값을 생성
    // const [상태값, 상태값을 변경할 수 있는 함수]
    // = useState(초기값)
    const [name, setName] = useState('김겨울')
    function changeName() {
        setName(name === '김겨울' ? '김가을' : '김겨울')
    }

    const [number, setNumber] = useState(0)

    const [isOn, setIsOn] = useState(false)
    function changeOn() {
        setIsOn(!isOn)
    }

    const sortArr = [
        { value: '해변', icon: <LiaUmbrellaBeachSolid /> },
        { value: '한옥', icon: <FaHouseChimneyWindow /> },
        { value: '농장', icon: <SiHappycow /> },
        { value: '전망', icon: <Tb360View /> },
    ]

    const [selected, setSelected] = useState(0)

    const [isToggle, setIsToggle] = useState(false)
    return (
        <>
            <div>
                <h3>햄버거 메뉴</h3>
                <button onClick={() => setIsToggle(!isToggle)}>{isToggle ? <IoClose /> : <IoMenu />}</button>
                <ul style={{ display: isToggle ? 'block' : 'none' }}>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                    <li>menu4</li>
                </ul>
            </div>
            <div>
                <h3>menu 클릭시 active 클래스 추가</h3>
                <SortStyled>
                    {sortArr.map((item, index) => (
                        <li
                            key={index}
                            className={selected === index ? 'active' : ''}
                            onClick={() => setSelected(index)}
                        >
                            {item.icon} {item.value}
                        </li>
                    ))}
                </SortStyled>
            </div>
            <div>
                <h3>이미지 토글</h3>
                <img onClick={changeOn} src={isOn ? switchOn : switchOff} alt="switch" />
                <div>{isOn ? '켜짐' : '꺼짐'}</div>
            </div>
            <div>
                <h3>Counter</h3>
                <strong>{number}</strong>
                <button onClick={() => setNumber(number + 1)}>증가</button>
                <button onClick={() => setNumber(number - 1)}>감소</button>
            </div>
            <div>
                <h3>가을 겨울 이름 바꾸기</h3>
                <strong className="name">{name}</strong>
                <button onClick={() => setName(name === '김겨울' ? '김가을' : '김겨울')}>이름 바꾸기</button>
            </div>
        </>
    )
}

const SortStyled = styled.ul`
    display: flex;
    list-style: none;
    li {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        &.active {
            color: #f00;
        }
    }
    svg {
        font-size: 30px;
    }
`

export default State
