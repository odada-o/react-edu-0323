function PostEdit() {
    return (
        <form action="/post" method="POST" className="max-w-3xl w-full mx-auto">
            <h2 className="blind">블로그 글 작성</h2>
            <div className="mt-10">
                <input
                    type="text"
                    id="title"
                    className="w-full py-2 text-4xl font-bold"
                    placeholder="제목을 입력하세요."
                    title="제목"
                />
            </div>
            <div className="mt-5">
                <textarea
                    name="content"
                    id="content"
                    cols={30}
                    rows={10}
                    className="w-full border-2 p-2"
                    title="내용"
                    placeholder="당신의 이야기를 적어보세요..."
                ></textarea>
            </div>
            <div className="mt-5 flex justify-end">
                <button className="px-5 py-2 bg-gray-800 text-white rounded-full">등록</button>
            </div>
        </form>
    )
}

export default PostEdit
