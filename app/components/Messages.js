import {Box} from '@mui/material'
import Markdown from 'react-markdown'

const Message = ({role, content}) => {
    return (
        <Box
        bgcolor={role === 'assistant' ? 'white' : 'crimson'}
        fontSize={{xs:12, md:15, lg:20}}
        color={role === 'assistant' ? 'black' : 'white'}
        borderRadius={3}
        p={role === 'assistant' ? 3 : 1}
        sx={{ wordWrap: 'break-word'}}
        >  
        <Markdown>{content}</Markdown>
      </Box>
    );
};

export default Message;
