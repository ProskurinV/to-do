import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTask } from 'redux/tasksSlice';
import { Modal } from 'components/Modal/Modal';

export const Task = ({ task, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handeleDelete = () => dispatch(deleteTask(id));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
      }}
    >
      <ul
        id={task.id}
        onClick={toggleModal}
        style={{ margin: 0, display: 'flex', gap: 10, marginTop: 20 }}
      >
        <li> {task.id}</li>
        <li> {task.title}</li>
        <li> {task.description}</li>
        <li> {task.status}</li>
        <input type="checkbox" checked={task.status} />
        <button type="button" onClick={handeleDelete}>
          Delete
        </button>
      </ul>
      {isModalOpen && <Modal task={task} toggleModal={toggleModal} />}
    </div>
  );
};
