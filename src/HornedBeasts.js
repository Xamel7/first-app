// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import {useState} from 'react';

function HornedBeasts(props) {
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultDisplay, setDefaultDisplay] = useState("black")
 function onClick(){
  setIsFavorited(!isFavorited);
  //if statement to determine what to setDefaultDisplay to.
  // console.log(isFavorited)
  if(!isFavorited){
    setDefaultDisplay('black')
    }else {
      setDefaultDisplay('red')
  }
 };
  return (
    <div>
    <h2>{props.title}</h2>
    <img src={props.image} alt="beast" width={300}></img>
    <p>{props.description}</p>
    <p onClick={onClick} style={{color: defaultDisplay}}>&#10084;</p>
    </div>
    );
}



export default HornedBeasts;
