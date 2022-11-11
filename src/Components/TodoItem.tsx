import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

interface TodoItemProps {
  content: string
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <Box>
      <Typography align="left">
        {props.content}
      </Typography>
    </Box>
  );
};

export default TodoItem;