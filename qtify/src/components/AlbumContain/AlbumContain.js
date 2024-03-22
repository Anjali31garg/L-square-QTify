import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Album.module.css";
import Button from '@mui/material/Button';
import Carousel from "../Carousel/Carousel";

const AlbumContain = ({apiurl, title}) =>{
const[topAlbum, setTopAlbum] = useState([]);
const[showCarousel, setShowCarousel] = useState(true);
console.log("fetching data of", title);

const performApi = async(url) =>{
    try{
        const response = await axios.get(url);
        setTopAlbum(response.data);
    }
    catch(error){
        console.log("There is some error fetching data from top api");
    }
};

useEffect(()=>{
    performApi(apiurl);
},[]);

const toggleMe = ()=>{
    setShowCarousel(!showCarousel);
}

return(
    <>
     <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', color:'#FFFFFF' }}>
        <h2>{title}</h2>
        <Button variant="text" className={styles.albumbtn} sx={{color: 'green'}} onClick={toggleMe}>
            
            {showCarousel ? 'Show All': 'Collapse'}</Button>
      </div>

      {!showCarousel ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {topAlbum.length ? topAlbum.map((albumDetails, idx) => (
            <Card albumDetails={albumDetails} key={albumDetails.id} />
          )) : null}
        </div> // Use the Carousel component here
      ) : (
      
         <Carousel 
         data={topAlbum}
         renderComponent={(data)=> <Card albumDetails={data}/>}
         /> // Use the Carousel component here
      )}
    </>
)
}

export default AlbumContain;