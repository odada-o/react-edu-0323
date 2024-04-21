import axios from 'axios'
import { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState([])
    // 마운트 시에만 실행
    useEffect(() => {
        // fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        //     .then((response) => response.json()) // JSON 형태로 변환
        //     .then((data) => {
        //         console.log(data)
        //         setNews(data.articles)
        //     })
        //     .catch((error) => console.error(error))
        // async/await 사용
        const fetchData = async () => {
            try {
                const reponse = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
                )
                // const data = await reponse.json()
                // console.log(reponse.data)
                setNews(reponse.data.articles)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>News</h1>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <img src={item.urlToImage} alt={item.title} />
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News
