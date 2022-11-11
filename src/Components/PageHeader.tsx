import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/*
 why does the button automatically align to the right
*/

const PageHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            your todo list
          </Typography>
          <Button color="inherit"> About </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default PageHeader;