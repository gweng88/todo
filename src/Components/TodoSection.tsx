import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TodoItem, { TodoItemProps } from './TodoItem';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));
  
export interface TodoSectionProps {
    title: string
    xs: number
    items: TodoItemProps[]
};

function TodoSection(props: TodoSectionProps) {
  return (
    <Grid xs={props.xs}>
      <StyledPaper elevation={4}>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Grid container columnSpacing={1} direction="column" alignContent="flex-start">
          {props.items.map(i => <TodoItem {...i}/>)}
        </Grid>
      </StyledPaper>
    </Grid>
  );
}

export default TodoSection;