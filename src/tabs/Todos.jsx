import { nanoid } from 'nanoid';
import FormTD from './../components/Form/Form';
import TodoList from './../components/TodoList/TodoList';
import { useEffect, useState } from 'react';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const receivedData = localStorage.getItem('savedTodos');

    if (receivedData !== null) {
      const normalizedData = JSON.parse(receivedData);
      return normalizedData;
    }

    return [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ];
  });
  const [isEditting, setIsEditting] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  function isRepeat(text) {
    if (todos.find(item => item.text === text)) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmitAdd(inputValues, actions) {
    if (!isRepeat(inputValues.search)) {
      setTodos(prevTodos => {
        return [...prevTodos, { id: nanoid(), text: inputValues.search }];
      });
    } else {
      alert('You have already added it');
    }
    actions.resetForm();
  }
  function handleSubmitEdit(inputValues) {
    if (!isRepeat(inputValues.text)) {
      setTodos(prevTodos => {
        return prevTodos.map(item => {
          if (item.id === inputValues.id) {
            item.text = inputValues.text;
          }
          return item;
        });
      });
    } else {
      alert('You have already added it');
    }
    setIsEditting(false);
    setCurrentEdit({});
  }

  function handleClickDelete(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id);
    });
  }
  function handleClickEdit(id) {
    const exactItem = todos.find(item => item.id === id);
    setCurrentEdit(exactItem);
    setIsEditting(true);
  }
  function handleClickCancel() {
    setIsEditting(false);
    setCurrentEdit({});
  }

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {isEditting ? (
        <EditForm
          edittingObject={currentEdit}
          handleSubmit={handleSubmitEdit}
          handleClickCancel={handleClickCancel}
        />
      ) : (
        <FormTD handleSubmit={handleSubmitAdd} />
      )}
      <TodoList
        todoItems={todos}
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      />
    </>
  );
};

export default Todos;
