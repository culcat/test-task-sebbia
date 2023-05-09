import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function CategoryNews() {
  const [news, setNews] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      axios.get(`http://testtask.sebbia.com/v1/news/categories/${categoryId}/news`)
        .then(response => {
          if (Array.isArray(response.data.list) && response.data.list.length > 0) {
            setNews(response.data.list)
          } else {
            setNews([])
          }
        })
        .catch(error => {
          console.log(error)
        });
    }
  }, [categoryId])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const dateStr = date.toLocaleDateString('ru-RU', options)
    const timeStr = date.toLocaleTimeString('ru-RU')
    return `${dateStr} ${timeStr}`
  };

  return (
    <div>
      <h2>Новости в категории:</h2>
      {news.length > 0 ? (
        <ul>
          {news.map(category => (
            <li key={category.id}>
              <Link to={`/news/${category.id}`}>{category.title}</Link>
              <p>{category.shortDescription}</p>
              <p>{formatDate(category.date)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет новостей в данной категории</p>
      )}
    </div>
  );
};

export default CategoryNews;
