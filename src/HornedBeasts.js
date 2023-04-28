// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import {useState} from 'react';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import SelectedBeast from './selectedBeast';


function HornedBeasts(props) {
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultDisplay, setDefaultDisplay] = useState('black')
  let [timesClicked, setTimesClicked] = useState(0)
 function handleClick(){
  setIsFavorited(!isFavorited);
  //if statement to determine what to setDefaultDisplay to.
  // console.log(isFavorited)
  if(!isFavorited){
    setDefaultDisplay('black')
    setTimesClicked(timesClicked + 1);
    }else {
      setDefaultDisplay('red')
  }
  console.log('fave state ', isFavorited)
  console.log('display state ', defaultDisplay)
 };
  return (
    <Card style={{maxWidth:"30%", textAlign:"center", display:"inline-grid", objectFit:'contain', border:"5px solid purple"}}>
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Img onClick={function(){
        props.setShow(true)
        props.setSelectedBeasts({title:props.title, description:props.description, image:props.image})
      }} src={props.image} alt="beast" width={100}></Card.Img>
      <Card.Text>{props.description}</Card.Text>
      <Card.Text onClick={handleClick} className="text-dark" style = {{color:'black' }}>{ isFavorited===true ? "❤️" : "🖤"}{timesClicked}</Card.Text>
      </Card.Body>
      <Button onClick={function() {
      props.setShow(true)
      }}>Click Here</Button>

    </Card>
    );
}



export default HornedBeasts;
