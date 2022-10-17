import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export interface AddSectionModalProps{
  showModal: boolean,
  onClose: () => void,
  onClickFinishButton: () => void
}

function AddSectionModal(props: AddSectionModalProps) {
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

  return (
    <Modal open={props.showModal} onClose={props.onClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button variant="contained" onClick={props.onClickFinishButton}>
          Finish
        </Button>
      </Box>
    </Modal>
  );
}

export default AddSectionModal;