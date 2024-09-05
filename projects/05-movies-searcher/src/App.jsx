import './App.css'
import response from './mocks/response.json';
import responseNoResults from './mocks/responseNoResults.json';

function App() {
  const results = response.Search;
  const haveResults = results.length > 0;

  console.log(`response: ${response.Search}`);
  return (
    <div className='page'>
      <header className='header'>
        <h1>Search movie</h1>
        <form className="header__form">
          <input className='header__form__input' type="text" placeholder='Search movie'/>
          <button type='submit' className='header__form__button'>Search</button>
        </form>
      </header>
      <main>
        {
          haveResults
          ? (
            <ul className='movies-list'>
              {
              results.map(result => (
                  <li key={result.imdbID}>
                    <p>
                      {result.Title}
                    </p>
                    <p>
                      {result.Year}
                    </p>
                    <img src={result.Poster} alt={result.Title} />
                  </li>
                ))
              }
            </ul>
          )
          : (<p>Results not found</p>)
        }
      </main>
    </div>
  )
}

export default App
