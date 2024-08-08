import {Box} from '@mui/material'
import Markdown from 'react-markdown'

const Message = ({role, content}) => {
    return (
        <Box
        bgcolor={role === 'assistant' ? 'primary.main' : 'secondary.main'}
        color="white"
        borderRadius={5}
        p={4}
        sx={{ wordWrap: 'break-word' }}
        >  
        <Markdown>{content}</Markdown>
      </Box>
    );
};

export default Message;
