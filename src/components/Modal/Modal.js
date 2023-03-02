import {
  Backdrop,
  ModalWindow,
  ModalTitle,
  ModalDescriptionTitle,
  ModalDescription,
  ModalStatus,
  ModalBtn,
} from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../../redux/tasksSlice';

export const Modal = ({ task, toggleModal }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleTask(task.id));

  return (
    <Backdrop>
      <ModalWindow>
        <ModalTitle>{task.title}</ModalTitle>
        <ModalDescriptionTitle>Description:</ModalDescriptionTitle>
        <ModalDescription> {task.description}</ModalDescription>
        <ModalStatus>
          Status:
          <input
            style={{ marginLeft: 5 }}
            type="checkbox"
            checked={task.status}
            onChange={handleToggle}
          />
        </ModalStatus>

        <ModalBtn onClick={toggleModal}>Close</ModalBtn>
      </ModalWindow>
    </Backdrop>
  );
};
