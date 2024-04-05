import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

// 탭 구현
type TabType = 'all' | 'my' // 탭의 종류

function PostList() {
    // tabs 구현
    const [activeTab, setActiveTab] = useState<TabType>('all') // 현재 선택된 탭

    return (
        <div>
            <Tabs>
                <li
                    role="presentation" // 클릭 가능한 요소임을 나타냄
                    onClick={() => setActiveTab('all')}
                    className={activeTab === 'all' ? 'active' : ''}
                >
                    전체
                </li>
                <li
                    role="presentation"
                    onClick={() => setActiveTab('my')}
                    className={activeTab === 'my' ? 'active' : ''}
                >
                    나의 글
                </li>
            </Tabs>
            <div>
                {/* <h2>post list</h2> */}
                {[...Array(10)].map((item, index) => (
                    <div key={index} className="py-10 border-b-2">
                        <h2 className="font-bold text-2xl">
                            <Link to={`/post/${index}`}>블로그 글 제목 {index}</Link>
                        </h2>
                        <p className="text-gray-700 py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa possimus sint id nostrum
                            temporibus, ullam sequi ab dolorum esse qui nulla ducimus cupiditate in distinctio expedita
                            iusto sapiente aspernatur.
                        </p>
                        <span className="text-gray-600 text-sm">2024년 4월 1일</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Tabs = styled.ul`
    ${tw`
        flex
        border-b-2
    `}
    li {
        ${tw`
            p-4
            cursor-pointer
            text-lg
        `}
        &.active {
            ${tw`
                font-bold
                border-b-2
            `}
        }
    }
`

export default PostList
