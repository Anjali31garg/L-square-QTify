import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Album.module.css";
import Button from '@mui/material/Button';


const AlbumContain = ({apiurl, title}) =>{
const[topAlbum, setTopAlbum] = useState([]);
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


return(
    <>
     <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', color:'#FFFFFF' }}>
        <h2>{title}</h2>
        <Button variant="text" className={styles.albumbtn} sx={{color: 'green'}}>Collapse</Button>
      </div>
     {/* <h1 className="font-Poppins text-white text-3xl mt-5 ml-5">{title}</h1> */}
     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
     
        {topAlbum.length
          ? topAlbum.map((albumDetails, idx) => (
              <Card albumDetails={albumDetails} key={albumDetails.id} />
            ))
          : null}
      </div>
    
    </>
)
}

export default AlbumContain;