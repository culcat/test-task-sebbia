import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Главная</h1>
      <nav>
        <ul>
          
          <li>
            <Link to="/category">Категории</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Home;