import React from 'react';
import {Card as MuiCard, CardContent,CardMedia, Typography,Chip, colors} from '@mui/material';
import styles from "./Card.module.css";

const Card = ({albumDetails}) =>{
    return (

        <>
          <div className={styles.cardContainer}>
            <MuiCard sx={{maxWidth: 200 , maxHeight:400}}  className={styles.mycard}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={albumDetails.image}
                sx={{objectFit: 'cover'}}  
              
            />
            <CardContent>
                <Chip label={`${albumDetails.follows} Follows`}  className={styles.mychip} sx={{backgroundColor: 'black',color: 'white'}}/>
                {/* <Typography gutterBottom variant="h5" component="div">

                    {albumDetails.title}
                </Typography> */}
            </CardContent>
          
            </MuiCard>
            <Typography gutterBottom variant="h5" component="div" className={styles.text}>

{albumDetails.title}
</Typography>
            </div>
        </>
    )
}

export default Card;