import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function NewsDetails() {
  const { id } = useParams()
  const [newsData, setNewsData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(`http://testtask.sebbia.com/v1/news/details?id=${id}`)
      const data = await response.json()
      setNewsData(data)
      setLoading(false)
    }

    fetchNewsData()
  }, [id])

  function formatDate(dateString){
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const dateStr = date.toLocaleDateString('ru-RU', options)
    const timeStr = date.toLocaleTimeString('ru-RU')
    return `${dateStr} ${timeStr}`
  }


  return (
    <div>
      {newsData && (
        <>
          <h1 dangerouslySetInnerHTML={{ __html: newsData.news.title }}></h1>
          {loading ? (
            <p dangerouslySetInnerHTML={{ __html: newsData.news.shortDescription }}></p>
            ) : (
            <div dangerouslySetInnerHTML={{ __html: newsData.news.fullDescription }}></div>
          )}
          <p dangerouslySetInnerHTML={{ __html:formatDate(newsData.news.date) }}></p>
        </>
      )}
    </div>
  )
}

export default NewsDetails