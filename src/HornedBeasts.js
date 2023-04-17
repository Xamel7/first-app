// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';

function HornedBeasts(props) {
  return (
    <div>
    <h2>{props.title}</h2>
    <img src={props.image} alt="beast" width={300}></img>
    <p>{props.description}</p>
    </div>
    );
}


export default HornedBeasts;
