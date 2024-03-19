import React from 'react';
import search  from '../../assests/search.svg'
import {TextField,InputAdornment,IconButton,Divider} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css';
const Search = ()=>{

    return (
        <>
        <TextField  className={styles.searchme}
        
        placeholder='Search a song of your choice'
        variant='outlined'
       
        sx={{width:'60ch',
       backgroundColor:'white',
        borderRadius: '4px',
        '& input::-webkit-input-placeholder': {
            color: 'black', // Change placeholder text color here
        },
    }}
    size='small'

        InputProps={{
            sx: {
                
                '& fieldset': {
                    borderColor: 'black', // Set the border color here
                },
                
            },
            endAdornment:(
                <InputAdornment position='end'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Divider orientation="vertical" sx={{ height: '4.2ch', m:3,backgroundColor:'black' }} />
                            <img  src={search} alt="Search Icon" />
                        </div>
                    </InputAdornment>
            ),
        }}

       
       />
            
    

        </>
    )
}

export default Search;