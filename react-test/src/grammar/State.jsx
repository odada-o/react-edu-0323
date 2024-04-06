import { useState } from 'react'
import styled from 'styled-components'

import switchOn from '../assets/images/switch-on.svg'
import switchOff from '../assets/images/switch-off.svg'

function State() {
    const [isToggled, setIsToggled] = useState(false)

    const sortArr = [
        { icon: '📅', value: '최신순' },
        { icon: '👍', value: '추천순' },
        { icon: '💬', value: '댓글순' },
    ]

    // 위 소스에 아이콘 이모지는 어떻게 추가하는거야?
    // https://emojicombos.com/ 에서 이모지를 복사해와서 사용하면 된다.

    const [selected, setSelected] = useState(0)

    const [isToggled2, setIsToggled2] = useState(false) // useState(false)는 상태의 초기값이다.

    function toggleMenu() {
        setIsToggled(!isToggled) // isToggled의 값을 변경한다.
    }

    const [activeTab, setActiveTab] = useState('tab1')

    const tabs = [
        { id: 'tab1', title: 'tab1', content: 'this is tab1' },
        { id: 'tab2', title: 'tab2', content: 'this is tab2' },
        { id: 'tab3', title: 'tab3', content: 'this is tab3' },
    ]

    return (
        <>
            <div>
                <img
                    src={isToggled ? switchOn : switchOff}
                    alt="switch"
                    style={{ width: 300 }}
                    onClick={() => {
                        setIsToggled(!isToggled)
                    }}
                />

                <div>{isToggled ? '켜짐' : '꺼짐'}</div>
            </div>

            <div>
                <SortStyled>
                    {sortArr.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(index)
                            }}
                            className={selected === index ? 'active' : ''}
                        >
                            {/* // 클릭 시, selected의 상태를 변경
                    // selected의 상태가 변경되면, 화면이 다시 렌더링되어 selected === index가 true가 되어 active 클래스가 추가된다. */}
                            {item.icon}
                            {item.value}
                        </li>
                    ))}
                </SortStyled>
                <div className="tab-contents">
                    {sortArr.map((item, index) => (
                        <div key={index} style={{ display: selected === index ? 'block' : 'none' }}>
                            {item.value}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <ul className="tabs">
                    <li
                        role="presentation" // 클릭 가능한 요소로 설정
                        className={activeTab === 'tab1' ? 'active' : ''}
                        onClick={() => setActiveTab('tab1')}
                    >
                        tab1
                    </li>
                    <li
                        role="presentation"
                        className={activeTab === 'tab2' ? 'active' : ''}
                        onClick={() => setActiveTab('tab2')}
                    >
                        tab2
                    </li>
                    <li
                        role="presentation"
                        className={activeTab === 'tab3' ? 'active' : ''}
                        onClick={() => setActiveTab('tab3')}
                    >
                        tab3
                    </li>
                </ul>
                <div className="tab-content">
                    {activeTab === 'tab1' && <div>this is tab1</div>}
                    {activeTab === 'tab2' && <div>this is tab2</div>}
                    {activeTab === 'tab3' && <div>this is tab3</div>}
                </div>
            </div>

            <div>
                <ul className="tabs">
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            role="presentation"
                            className={activeTab === tab.id ? 'active' : ''}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </li>
                    ))}
                </ul>
                <div className="tab-content">
                    {tabs.map((tab) => (
                        <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const TabsStyle = styled.ul`
    display: flex;
    li {
        cursor: pointer;
    }
`

const SortStyled = styled.div`
    list-style: none;
    display: flex;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100px;
        height: 75px;
        color: #777;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            color: #000;
        }
    }
    svg {
        font-size: 30px;
    }

    .active {
        border-bottom: 2px solid #000;
    }
`

const MenuStyle = styled.div`
    .header__menulist {
        list-style: none;
        display: flex;
    }
    @media screen and (max-width: 768px) {
        .header__menulist {
            display: ${(props) => (props.isToggled ? 'flex' : 'none')};
            flex-direction: column;
            width: 100px;
            padding: 20px;
            background-color: #eee;
        }
    }
`

export default State
