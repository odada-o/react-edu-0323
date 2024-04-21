const Comments = () => {
    const users = [
        {
            name: '겨울이',
            img: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
        },
        {
            name: '가을이',
            img: 'https://ssl.pstatic.net/melona/libs/1490/1490429/9fabf99cb1318e674d83_20240318144413924.png',
        },
    ]

    const commentData = [
        {
            user: users[0],
            text: '난 예민해. 아무거나 먹지 않아.',
            date: '2024.03.31',
        },
        {
            user: users[1],
            text: '난 사료를 좋아해. 많이 많이 먹어.',
            date: '2024.05.05',
        },
    ]

    return (
        <div>
            <h2>Comments</h2>
            {commentData.map((item, index) => (
                <Comment key={index} data={item} />
            ))}
        </div>
    )
}

const Comment = ({ data }) => {
    // data = { user: { name: '겨울이', img: 'https://assets.chatgpt4google.com/assets/promo/43.gif' }, text: '난 예민해. 아무거나 먹지 않아.', date: '2024.03.31' }
    return (
        <div>
            <User user={data.user} />
            <p>{data.text}</p>
            <time>{data.date}</time>
        </div>
    )
}

const User = ({ user }) => {
    // user = { name: '겨울이', img: 'https://assets.chatgpt4google.com/assets/promo/43.gif' }
    return (
        <div>
            <img src={user.img} alt={user.name} />
            <p>{user.name}</p>
        </div>
    )
}

export default Comments
