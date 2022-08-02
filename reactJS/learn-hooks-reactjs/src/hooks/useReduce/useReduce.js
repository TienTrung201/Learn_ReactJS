import { useReducer, useRef } from "react";

// const initState = 0;
// //1Init State
// //2. Actions
// //3. recducer
// //4. Dispatch
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("Invalid action!");
//   }
// };

// function UseReducer() {
//   const [count, dispatch] = useReducer(reducer, initState);

//   console.log("re-render");
//   return (
//     <div className="App">
//       <h1>{count}</h1>

//       <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//       <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//     </div>
//   );
// }

// export default UseReducer;
const initialState = {
  job: "",
  jobs: ["một ","hai","ba","bốn"]
}
const ADD__JOB = "addJob"
const addJob = (obj) => {
  return{
    type: ADD__JOB,
  }
}
const SET__JOB = "setJob"
const setJob = (value) => {
  console.log(value)
  return {
    type: SET__JOB,
    value
  }
}
const DELETE__JOB = "deleteJob"
const deleteJob = (index) => {
  return {
    type: DELETE__JOB,
    index: index,
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case SET__JOB: {
      console.log(state)
      return{
        ...state,
        job : action.value,
      }
    }case ADD__JOB: {
      return{
        jobs:[...state.jobs,state.job],
        job:""
      }
    }case DELETE__JOB: {
      let newJobs=[...state.jobs]
      newJobs.splice(action.index,1)
      // console.log(newJobs.slice(action.index+1,state.jobs.length))
      return{
        ...state,
        jobs: newJobs,
      }
    }
    default:
      throw new Error("Invalid action!");
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { job, jobs } = state;
  const inputRef = useRef();

  return (
    <div style={{ padding: "10px 32px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button 
        onClick={()=>{
          dispatch(addJob());
        }}
      >Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span
              onClick={()=>dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducer;
