import {Box, Button, Typography} from '@mui/material'
import Markdown from 'react-markdown'
import Login from './Login';
// import Login from '.components/Login';

const darkBrown = "#654321"
const lightBrown = "#9A7B4F"


export default function Navbar() {
    return (
        <Box
            width="100vw"
            height="10vh"
            spacing ={2}
            p={1}
            sx={{bgcolor:"grey"}}
        >
            <Box 
                flexDirection="row"
                display="flex"
                justifyContent="space-between"
                // gap={30}
                alignItems="center"
                p={3}
            >
                <Typography variant ="h4" color="white"> 
                    Wofford College | Career Center
                </Typography>
                <Button variant="contained" color="inherit">
                    {/* <Login/> */} Login
                </Button>
            </Box>
      </Box>
    );
};
