// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

function Main() {
  return (
    
    <div>
        <HornedBeasts title="Mask"image="./mask.jpg" description="Oni Mask with Devilish Horned"/>
        <HornedBeasts title="True Ogre"image="./true_ogre.jpg" description="True Ogre of Terror"/>
        <HornedBeasts title={data[0].title} image={data[0].image_url} description={data[0].description}/>
        <HornedBeasts title={data[1].title} image={data[1].image_url} description={data[1].description}/>
        <HornedBeasts title={data[2].title} image={data[2].image_url} description={data[2].description}/>
        <HornedBeasts title={data[3].title} image={data[3].image_url} description={data[3].description}/>
        <HornedBeasts title={data[4].title} image={data[4].image_url} description={data[4].description}/>
        <HornedBeasts title={data[5].title} image={data[5].image_url} description={data[5].description}/>
        <HornedBeasts title={data[6].title} image={data[6].image_url} description={data[6].description}/>
        <HornedBeasts title={data[7].title} image={data[7].image_url} description={data[7].description}/>
        <HornedBeasts title={data[8].title} image={data[8].image_url} description={data[8].description}/>
        <HornedBeasts title={data[9].title} image={data[9].image_url} description={data[9].description}/>
        <HornedBeasts title={data[10].title} image={data[10].image_url} description={data[10].description}/>
        <HornedBeasts title={data[11].title} image={data[11].image_url} description={data[11].description}/>
        <HornedBeasts title={data[12].title} image={data[12].image_url} description={data[12].description}/>
        <HornedBeasts title={data[13].title} image={data[13].image_url} description={data[13].description}/>
        <HornedBeasts title={data[14].title} image={data[14].image_url} description={data[14].description}/>
        <HornedBeasts title={data[15].title} image={data[15].image_url} description={data[15].description}/>
        <HornedBeasts title={data[16].title} image={data[16].image_url} description={data[16].description}/>
        <HornedBeasts title={data[17].title} image={data[17].image_url} description={data[17].description}/> 
    </div>
    );
}

export default Main;
