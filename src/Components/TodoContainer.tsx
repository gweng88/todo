import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import TodoButtons from './TodoButtons';
import TodoSection from './TodoSection';
import AddSectionModal from './AddSectionModal';
import { TodoSectionData } from '../Schemas';
import { useLocalStorage } from '../hooks';

const TodoContainer = () => {
  const [testing, setTesting] = useLocalStorage<string>('testing', "");
  const [todoSections, setTodoSections] = useLocalStorage<TodoSectionData[]>('todoSections', [] as TodoSectionData[]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addNewSection = (data: TodoSectionData) => {
    setTodoSections([...todoSections, data]);
    closeModal();
  }

  return (
    <Container maxWidth='lg'>
      <h1>{testing}</h1>
      <AddSectionModal 
        showModal={showModal} 
        onClose={closeModal} 
        onClickFinishButton={addNewSection}
      />
      <TodoButtons 
        onClickAddButton={openModal} 
        onClickEditButton={() => setTesting(testing + "a")}
      />
      <Grid container spacing={2}>
        {todoSections.map((section) => <TodoSection {...section}/>)}
      </Grid>
    </Container>
  );
}

export default TodoContainer;