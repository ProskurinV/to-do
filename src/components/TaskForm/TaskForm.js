import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { FormEl, Input, Error, BoxWarning } from './TaskForm.styled';

const schema = yup.object().shape({
  title: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Please, enter title'),
  description: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. '
    )
    .required('Please, enter description'),
});

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    description: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        dispatch(addTask(values));
        setValues({
          title: '',
          description: '',
        });
      })
      .catch(err => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <div style={{ display: 'grid' }}>
        <label>
          Title
          <Input
            type="text"
            name="title"
            placeholder="Enter title"
            value={values.title}
            onChange={handleChange}
          />
        </label>
        <BoxWarning>
          <Error>{errors.title}</Error>
        </BoxWarning>
      </div>
      <div style={{ display: 'grid' }}>
        <label>
          Description
          <Input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={values.description}
            onChange={handleChange}
          />
        </label>
        <BoxWarning>
          <Error>{errors.description}</Error>
        </BoxWarning>
      </div>

      <button type="submit">Create</button>
    </FormEl>
  );
};
