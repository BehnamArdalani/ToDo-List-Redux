// Action types:
const TODO_ADDED = "todoAdded";
const TODO_REMOVED = "todoRemoved";
const TODO_EDITED = "todoEdited";
//const TODO_APPROVED = "todoApproved";

// Action creators:
export function todoAdded(todo) {
  return {
    type: TODO_ADDED,
    payload: {
      title: todo.title,
      // startDate: todo.startDate,
      // endDate: todo.endDate,
      level: todo.level,
    },
  };
}

export function todoEdited(todo) {
  return {
    type: TODO_EDITED,
    payload: {
      id: todo.id,
      title: todo.title,
      // startDate: todo.startDate,
      // endDate: todo.endDate,
      level: todo.level,
    },
  };
}

export function todoRemoved(id) {
  return {
    type: TODO_REMOVED,
    payload: {
      id,
    },
  };
}

// export function todoApproved(id) {
//   return {
//     type: TODO_APPROVED,
//     payload: {
//       id,
//     },
//   };
// }

// Action reducer:
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          // startDate: action.payload.startDate,
          // endDate: action.payload.endDate,
          level: action.payload.level,
        },
      ];

    case TODO_EDITED:
      return state.map((t) =>
        t.id !== action.payload.id
          ? t
          : {
              ...t,
              title: action.title,
              // startDate: action.startDate,
              // endDate: action.endDate,
              level: action.level,
            }
      );

    case TODO_REMOVED:
      return state.filter((t) => t.id !== action.payload.id);
    // case TODO_APPROVED:
    //   return state.map((t) =>
    //     t.id !== action.payload.id ? t : { ...t, level: true }
    //   );
    default:
      return state;
  }
}
