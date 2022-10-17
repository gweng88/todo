import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import TodoButtons from './TodoButtons';
import TodoSection, { TodoSectionProps } from './TodoSection';
import AddSectionModal from './AddSectionModal';

export interface TodoContainerProps {
  sections: TodoSectionProps[]
};

function TodoContainer() {
  const defaultTodoContainerForTesting: TodoContainerProps = {
    sections: [
      {
        title: "first section",
        xs: 4,
        items: [
          {
            content: "first item"
          }
        ]
      },
      {
        title: "second section",
        xs: 8,
        items: [
          {
            content: "first item"
          },
          {
            content: "second item"
          }
        ]
      },
    ]
  };

  const [state, setState] = useState(defaultTodoContainerForTesting);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addNewSection = () => {
    state.sections.push({
      title: "new section",
      xs: 4,
      items: [
        {
          content: "first item"
        }
      ]
    });
    setState(state);
    closeModal();
  }

  return (
    <Container maxWidth='lg'>
      <AddSectionModal 
        showModal={showModal} 
        onClose={closeModal} 
        onClickFinishButton={addNewSection}
      />
      <TodoButtons 
        onClickAddButton={openModal} 
        onClickEditButton={() => alert("edit mode!")}
      />
      <Grid container spacing={2}>
        {state.sections.map((section) => <TodoSection {...section}/>)}
      </Grid>
    </Container>
  );
}

export default TodoContainer;