import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";
import { useState } from "react";


const Container = styled.div`
  background-color: white;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

let Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  img {
    cursor: pointer;
  }

  &::placeholder {
    color: #333;
  }
`;

/*const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;
*/

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:hover {
    background-color: #F5727E;
  }
`;

function TaskItem(props) {
  const dispatch = useDispatch();

  const [newTask, setnewTask] = useState(props.task.taskName);
  
  //setnewTask(props.task.taskName);
  
  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const finishChange = (event) => {
    if(newTask===""){
      setnewTask(props.task.taskName);
      window.alert('任務不可空白');
      return;
    }
    dispatch(actions.editTask(props.task.idx,newTask));
  }

  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={props.task.isCompleted}
        onChange={() => dispatch(actions.toggleTask(props.task.idx))}
      />
      <Input
        type="text"
        //placeholder={props.task.taskName}
        value={newTask}
        onChange={handleChange}
        onBlur={finishChange}
      />
      <Button onClick={() => dispatch(actions.deleteTask(props.task.idx))}>
        Delete
      </Button>
    </Container>
  );
}

export default TaskItem;
