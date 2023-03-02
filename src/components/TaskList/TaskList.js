import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectTasks } from 'redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          background: 'aliceblue',
        }}
      >
        <div>ID</div>
        <div>TITLE</div>
        <div>DESCRIPTION</div>
        <div>STATUS</div>
      </div>
      <div>
        <ul>
          {tasks.tasksList.map(task => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
