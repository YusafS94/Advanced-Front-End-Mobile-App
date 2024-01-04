import './App.css';
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
      <div id="search-form">
        <label for="searchInput">Enter a fighter name: </label>
        <input id="searchInput" placeholder="Fighter name" />
        <div class="searchResults">
          <div id="resultsCards"></div>
        </div>
      </div>
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
