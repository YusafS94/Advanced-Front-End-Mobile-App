import './App.css';
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fightersData from "./data/fighters.json";


function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  )
}
function Header(props) {
  return (
    <header>
      <Navigation />
      <h1>{props.name}</h1>
    </header>
  )
}
function Main() {
  return (
    <div>
      <p>Find out about MMA fighters.</p>
      <Form />
    </div>
  )
}
function Form() {
  const nameInput = useRef();
  const submit = (e) => {
    e.preventDefault(95);
    const searchTerm = nameInput.current.value;
  }

  return (
    <form id="search-form">
      <label for="searchInput">Enter a fighter name: </label>
      <input ref={nameInput} id="searchInput" placeholder="Fighter name" />
      <button>Search</button>
    </form>
  )
}
function Results() {
  return (
    <div class="searchResults">
      <div id="resultsCards"></div>
    </div>
  )
}
function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from local JSON file
    setData(fightersData);
  }, []);

  if (data) {
    return (
      <div className='mx-auto flex flex-col flex-wrap justify-center items-center md:flex-row border border-red-700'>
        {/* Render your data as needed */}
        {data.fighters.map((fighter) => (
          <div className='w-4/5 md:w-1/5 md:m-2 border border-blue-600 rounded-lg hover:scale-105' key={fighter.id}>
            <a className='' href='#'>
              <img className='max-w-full rounded-t-lg' src={require('./imgs/fighter.jpg')} height={150} />
              {fighter.name},
              {fighter.id}
            </a>

            {/* Display other fighter details as needed */}
          </div>
        ))
        }
      </div >
    );
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}
export function Profile() {
  return (
    <>
      <Navigation />
      <section>
        <h1>Profile page.</h1>
      </section></>

  )
}
function Footer() {
  return (
    <div>
      <p>Footer</p>
    </div>
  )
}
export function App() {
  return (
    <div className="App">
      <Header name="FighterTrax" />
      <Main />
      <Data />
      <Footer />
    </div>
  );
}

