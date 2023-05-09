import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Categories(){
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('http://testtask.sebbia.com/v1/news/categories')
      .then(response => {
        setCategories(response.data.list)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <h2>Категории:</h2>
      <ul>
        {categories.map(category => (
            <div key={category.id}>
           <Link to={`/category/${category.id}`}>
          <li >{category.name}</li>
          </Link>
        </div>
        ))}

      </ul>
    </div>
  );
};

export default Categories;
