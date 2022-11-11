import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TodoItem from './TodoItem';
import Typography from '@mui/material/Typography';
import { TodoSectionData } from '../Schemas';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function TodoSection(data : TodoSectionData) {
  // let [timer, setTimer] = useState(Date.now() + 10000)

  useEffect(() => {
    
  }, []);

  return (
    <Grid xs={data.xs}>
      <StyledPaper elevation={4}>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="h5" component="div">
          {//timer
          }
        </Typography>
        <Grid container columnSpacing={1} direction="column" alignContent="flex-start">
          {data.items && data.items.map(i => <TodoItem content={i}/>)}
        </Grid>
      </StyledPaper>
    </Grid>
  );
}

export default TodoSection;