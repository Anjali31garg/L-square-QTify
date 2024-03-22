import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Album.module.css";
import Button from '@mui/material/Button';
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";


const AlbumContain = ({apiurl, title}) =>{
const[topAlbum, setTopAlbum] = useState([]);
const[showCarousel, setShowCarousel] = useState(true);
const[selectedGenre, setSelectedGenre] = useState("All");
//const[filteredAlbums, setFilteredAlbums] = useState([]);

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
    console.log("API data fetched:", topAlbum);
},[]);


const toggleMe = ()=>{
    setShowCarousel(!showCarousel);
}


const handleTabs = (event,newValue)=>{

    setSelectedGenre(newValue);
    console.log("Selected genre:", newValue);
}

 const filteredAlbums = selectedGenre === "All" ? topAlbum : topAlbum.filter((album)=> album.genre.key === selectedGenre);

 console.log("selectedGenre:", selectedGenre);
    console.log("topAlbum:", topAlbum);
    console.log("filteredAlbums:", filteredAlbums);
 return(
    <>
     <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', color:'#FFFFFF' }}>
        <h2>{title}</h2>
        {title === 'Songs' && (
        <Tabs value={selectedGenre} onChange={handleTabs} textColor="white" className={styles.mygenres}
        TabIndicatorProps={{
            style: {
              backgroundColor: "#76ff03"
            }
          }}
        >
            <Tab label="All" value="All"/>
            
            <Tab label="rock" value="rock" />
                        <Tab label="pop" value="pop" />
                        <Tab label="jazz" value="jazz" />
                        <Tab label="blues" value="blues" />
                   
        </Tabs>
        )}
        {title !== 'Songs' && (
        <Button variant="text" className={styles.albumbtn} sx={{color: 'green'}} onClick={toggleMe}>
            
            {showCarousel ? 'Show All': 'Collapse'}</Button>
        )}
      </div>

        
      {!showCarousel && title !== 'Songs' && (
          <div className={styles.myalbum}>
          {topAlbum.length ? topAlbum.map((albumDetails, idx) => (
            <Card albumDetails={albumDetails} key={albumDetails.id} />
          )) : null}
        </div> // Use the Carousel component here
      )}
      {showCarousel && title !== 'Songs' && (
         <Carousel 
         data={topAlbum}
         renderComponent={(data)=> <Card albumDetails={data}/>}
         /> // Use the Carousel component here


      )}

        {title === 'Songs' && (
                <Carousel
                    data={filteredAlbums}
                    renderComponent={(data) => <Card albumDetails={data} isSong={title === 'Songs'} />}
                />
            )}
    </>
)
}

export default AlbumContain;