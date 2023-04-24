// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Main() {
  return (
    
    <div>
      <Card>
        <Card.Img variant="primary" />
        <Card.Body>
          <Card.Title>Deck Of Cards</Card.Title>
          <Card.Text>
            An inventory of the images I've collected thus far.
          </Card.Text>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
      {data.map(function(value,index){
        return <HornedBeasts title={data[index].title}image={data[index].image_url}description={data[index].description}/>
      })};
    </div>
    );
}

export default Main;
