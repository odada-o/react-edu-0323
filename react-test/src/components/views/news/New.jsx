import React, { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState([]) // 뉴스 데이터를 저장할 상태
    const [category, setCategory] = useState('all') // 카테고리를 저장할 상태

    // useEffect를 사용하여 컴포넌트가 마운트될 때, 업데이트될 때, 언마운트될 때 뉴스 데이터를 불러오는 작업을 수행
    useEffect(() => {
        // async 함수를 만들어 useEffect 내부에서 호출
        const fetchData = async () => {
            let response
            try {
                // 카테고리가 'all'이면 모든 뉴스 데이터를 불러옴
                if (category === 'all') {
                    response = await fetch(
                        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c79d178668bd474da2bbb1769dbef3ad'
                    )
                } else {
                    // 카테고리가 'all'이 아니면 해당 카테고리의 뉴스 데이터를 불러옴
                    response = await fetch(
                        `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=c79d178668bd474da2bbb1769dbef3ad`
                    )
                }
                const data = await response.json()
                setNews(data.articles)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData() // fetchData 함수를 호출
    }, [category]) // 'category' 상태가 변할 때마다 이 useEffect가 실행됩니다.

    // 카테고리 버튼을 클릭하면 'category' 상태를 변경하는 함수
    const selectCategory = (category) => {
        setCategory(category)
    }

    return (
        <div>
            <h1>뉴스</h1>
            <button onClick={() => selectCategory('all')}>전체</button>
            <button onClick={() => selectCategory('business')}>비즈니스</button>
            <button onClick={() => selectCategory('entertainment')}>엔터테인먼트</button>
            <button onClick={() => selectCategory('health')}>건강</button>
            <button onClick={() => selectCategory('science')}>과학</button>
            <button onClick={() => selectCategory('sports')}>스포츠</button>
            <button onClick={() => selectCategory('technology')}>기술</button>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News
