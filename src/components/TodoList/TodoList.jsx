import Grid from './../Grid/Grid';
import GridItem from './../GridItem/GridItem';
import TodoListItem from './../TodoListItem/TodoListItem';

const TodoList = ({ todoItems, handleClickDelete, handleClickEdit }) => {
  return (
    <Grid>
      {todoItems.map((item, index) => {
        return (
          <GridItem key={item.id}>
            <TodoListItem
              num={index}
              id={item.id}
              text={item.text}
              handleClickDelete={handleClickDelete}
              handleClickEdit={handleClickEdit}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default TodoList;
