
"use client"
import { Box, Button, Stack, Typography} from "@mui/material";
import * as React from 'react';
import Chatbot from './components/Chatbot';
import Navbar from "./components/Navbar";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
       <Navbar/>
    <Box
      width="100vw"
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
    >
      <Typography variant="h2" gutterBottom p={2} sx={{ textAlign:"center", fontSize: {xs:'2rem', md:'3rem', lg:'5rem'}}} >
        Welcome to your own Career Coach
      </Typography>
      <Button onClick={handleOpen} sx={{ fontSize: {xs:'20px', md:'25px', lg:'30px'}, borderRadius: '15px', color:"crimson", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)" }}>Start Chatting</Button>
      <Chatbot open={open} handleClose={handleClose} />
    </Box>
    </Stack>
  );
}
