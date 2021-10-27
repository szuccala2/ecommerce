import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
  
export default  function Header({ selected, setSelected, searchTerm, setSearchTerm }) {
    return (
        <Box sx={{ backgroundColor: "darkgray", height: "auto" }} p={4}>
            <Grid container justifyContent="end">
                <Grid item>
                    <Link style={{ color: "blue", textDecoration: "none" }}
                        onClick={()=>window.location = 'https://theuselessweb.com/'}>TWITTER</Link> | 
                    <Link style={{ color: "blue", textDecoration: "none" }}
                        onClick={()=>window.location = 'https://theuselessweb.com/'}>FACEBOOK</Link>
                </Grid>
            </Grid>
        </Box>
    );
}