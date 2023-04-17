import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome To 301</p>
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
