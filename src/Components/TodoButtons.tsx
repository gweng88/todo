import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export interface TodoButtonsProps{
  onClickAddButton: () => void,
  onClickEditButton: () => void
}

function TodoButtons(props: TodoButtonsProps) {
  return (
    <Grid container direction="row-reverse" sx={{ p: 2 }}>
      <IconButton onClick={props.onClickAddButton}>
        <AddIcon />
      </IconButton>
      <IconButton onClick={props.onClickEditButton}>
        <EditIcon />
      </IconButton>
    </Grid>
  );
}

export default TodoButtons;