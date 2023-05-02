import { useState } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'



function Main(props) {
  let x = [];
  const [choice, setChoice] = useState("")
 
  if (choice !== "") {
    x = data.filter(value => {
     if( value.horns == choice){
      return true;
     }else{
      return false;
     }
    })
  }else { 
    x = data;
  }

  console.log(x)

  function selector(event) {
    setChoice(event.target.value)
  }
  return (
    <div className='container' style={{ border: "5px solid green", width: "100%", alignItems: "center" }}>
      <Form.Select onChange={selector} aria-label="Beast Horns">
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">Hundred</option>
      </Form.Select>
      {/* <Button onClick={function() {
      props.setShow(true)
      }}>Push Here</Button> */}
      {/* Looping through the data.JSON to render images on my page. */}
      {x.map(function (value, index) {
        return <HornedBeasts key={value._id}
        setSelectedBeasts={props.setSelectedBeasts} 
        setShow={props.setShow} 
        beast={value}
        title={x[index].title} 
        image={x[index].image_url} 
        description={x[index].description} />
      })};
    </div>
  );
}

export default Main;
