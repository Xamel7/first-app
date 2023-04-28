// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import { useState } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
// import './Main.CSS'
// import Button from "react-bootstrap/Button";
import { Button } from 'react-bootstrap';



function Main(props) {

  return (
    <div className='container' style={{ border: "5px solid green", width: "100%", alignItems: "center" }}>
      {/* <Button onClick={function() {
      props.setShow(true)
      }}>Push Here</Button> */}
      {/*  */}
      {/* Looping through the data.JSON to render images on my page. */}
      {data.map(function (value, index) {
        return <HornedBeasts key={value._id} setSelectedBeasts={props.setSelectedBeasts} setShow={props.setShow} beast={value} title={data[index].title} image={data[index].image_url} description={data[index].description} />
      })};
    </div>
  );
}

export default Main;
