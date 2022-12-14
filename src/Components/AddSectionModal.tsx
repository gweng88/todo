import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { TodoSectionData } from '../Schemas';

export interface AddSectionModalProps {
  showModal: boolean,
  onClose: () => void,
  onClickFinishButton: (data: TodoSectionData) => void
}

const AddSectionModal = (props: AddSectionModalProps) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  let [title, setTitle] = useState<string>("");
  let [items, setItems] = useState<string[]>([]);

  const data: TodoSectionData = {
    title: title,
    items: items,
    xs: 4
  }

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  }
  const handleChangeItems = (e: any) => {
    setItems([...items, e.target.value])
  }

  return (
    <Modal open={props.showModal} onClose={props.onClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new todo note.
        </Typography>
        <TextField id="standard-basic" label="Title" variant="standard" onChange={handleChange} />
        <TextField id="standard-basic" label="Items" variant="standard" onChange={handleChangeItems} />
        <Button variant="contained" onClick={(e) => props.onClickFinishButton(data)}>
          Finish
        </Button>
      </Box>
    </Modal>
  );
}

export default AddSectionModal;