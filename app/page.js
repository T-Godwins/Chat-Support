
"use client"
import { Box, Button } from "@mui/material";
import * as React from 'react';
import Chatbot from './components/Chatbot';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
    >
      <Button onClick={handleOpen}>Start Chatting</Button>
      <Chatbot open={open} handleClose={handleClose} />
    </Box>
  );
}
