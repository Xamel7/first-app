// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
// import './Main.CSS'
// import Button from "react-bootstrap/Button";


function Main() {
  return (
    
    <div className='container' style={{width: "100%", alignItems: "center"}}>
      {/*  */}
      {/* Looping through the data.JSON to render images on my page. */}
      {data.map(function(value,index){
        return <HornedBeasts key={value._id} beast={value} title={data[index].title}image={data[index].image_url}description={data[index].description}/>
      })};
    </div>
    );
}

export default Main;
