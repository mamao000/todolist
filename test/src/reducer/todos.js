import * as types from '../actions/ActionTypes';

const initialTasks = [
  { taskName: "task1", isCompleted: false },
  { taskName: "task2", isCompleted: true },
  { taskName: "task3", isCompleted: false },
];

export default function todos(state = initialTasks, action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          taskName: action.taskName,
          isCompleted: false,
        },
      ];
    case types.DELETE_TASK:
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)];
    case types.TOGGLE_TASK:
      let newState = [...state];
      newState[action.idx].isCompleted = !newState[action.idx].isCompleted;
      return newState;
    case types.EDIT_TASK:
      let new_State = [...state];
      new_State[action.idx] = {
        taskName: action.taskName,
        isCompleted: false
      };
      return new_State;
    default:
      return state;
  }
}
