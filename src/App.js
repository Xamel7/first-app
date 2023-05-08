import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts';
import Main from './Main'
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import SelectedBeast from './selectedBeast';
import Button from 'react-bootstrap/Button';


function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [selectedBeast, setSelectedBeast] = useState({title: "beast", description:"This a description",image:"image_url" }) 

  return (
    <div className="App">
      <Header />
      {/* <Modal show={show} onHide={function(){ setShow(false)}}>
      Welcome to the Page.
      </Modal> */}
      {show === true ? <SelectedBeast selectedBeast={selectedBeast} setShow={setShow} /> : <></>}
      {/* <Button variant="primary" onClick={handleShow}>
        Press Here
      </Button> */}
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
      <Main setSelectedBeasts={setSelectedBeast} setShow={setShow} />
      <Footer />
    </div>
  );
}

export default App;
