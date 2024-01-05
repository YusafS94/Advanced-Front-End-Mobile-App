import './App.css';
import { useRef } from "react";

function Header(props) {
  return (
    <header>
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
function Footer() {
  return (
    <div>
      <p>Footer</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header name="FighterTrax" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
