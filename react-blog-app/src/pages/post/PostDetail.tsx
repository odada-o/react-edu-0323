import { Link } from 'react-router-dom'
import { GhostButton } from '../../components/button/Button'
import styled from 'styled-components'
import tw from 'twin.macro'

function handleClick() {
    alert('수정 버튼 클릭')
}

function PostDetail() {
    return (
        <div className=" max-w-3xl mx-auto">
            <h1 className=" text-4xl font-bold">블로그 글 제목</h1>
            <div className="flex justify-between py-5">
                <div>
                    <span className=" font-bold">김가을</span> <span className="mx-2 text-gray-500">|</span>
                    <span>2021-09-01</span>
                </div>
                <div>
                    <Link to="/post/edit/1" className="px-5 py-2 text-gray-600">
                        수정
                    </Link>
                    <GhostButton onClick={handleClick}>삭제</GhostButton>
                </div>
            </div>
            <div>
                <pre className="whitespace-pre-wrap">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ut libero similique reprehenderit
                    adipisci optio magnam pariatur natus ea! Quod inventore animi itaque odio optio sunt ipsam ipsa sit
                    est! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ut libero similique
                    reprehenderit adipisci optio magnam pariatur natus ea! Quod inventore animi itaque odio optio sunt
                    ipsam ipsa sit est!
                </pre>
            </div>

            {/* comment */}
            <Comment>
                <h2 className="text-xl font-bold">댓글 입력</h2>
                <form action="" className="overflow-hidden">
                    <textarea name="comment" id="" cols={30} rows={3} className="w-full mt-5 p-5 border-2"></textarea>
                    <button className="mt-1 px-5 py-2 float-right bg-gray-800 text-white rounded-full">등록</button>
                </form>
                <div className="mt-10  border-b-2">
                    <div className="flex justify-between py-5">
                        <div>
                            <span className="font-bold">김겨울</span> <span className="mx-2 text-gray-500">|</span>
                            <span>2021-09-01 오전 10:20</span> <GhostButton onClick={handleClick}>삭제</GhostButton>
                        </div>
                    </div>
                    <div className="py-5">
                        <p>안녕하세요.</p>
                    </div>
                </div>
            </Comment>
        </div>
    )
}

// twin.macro를 사용하여 스타일을 적용합니다.
const Comment = styled.div`
    ${tw`
        mt-10
    `}
`

export default PostDetail
