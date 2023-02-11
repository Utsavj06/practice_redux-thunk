import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./component/Users";

import { userAction } from "./redux/actions/userAction";

function App() {
  const dispatch= useDispatch();
  const userList = useSelector(state => state.usersList)
  console.log(userList)
  const {loading, users, error} = userList;

  useEffect(()=>{
    dispatch(userAction())
  },[dispatch])
  return (
    <div className="App">
      <h1> Redux Thunk</h1>
      {loading? <h1>Loading...</h1> : error ? <h2>{error}</h2> : 
        <Users users={users}/>}
    </div>
  );
}

export default App;
