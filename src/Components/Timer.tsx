import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*
 why does the button automatically align to the right
*/

function Timer() {
  return (
    <Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        timer
        </Typography>
    </Box>
  );
}

export default Timer;