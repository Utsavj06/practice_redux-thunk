Understand Step for Redux thunk

S1 :- Install Package Like Redux, React-Redux, Redux-thunk and axios

S2 :- Install Thunk by: npm i package name

S3 :- Make a Constant File in Redux in Redux Folder.

S4 :- Make a Store to Store the Redux Data.

S5 :- import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

S6 :- import thunk from "redux-thunk";

S7 :- create variable called rootReducer like.

    const rootReducer = combineReducers({
        usersList: userReducer,
    });

S8 :- Create variable called IntialState like.

    const initialState = {};

S9 :- Create variable called middleWare, like

    const middleWare = [thunk];

Note: In Application We can have multiple middleWare. so why we make array of middleWare like,
    const middleWare = [thunk, ....];

S10 : Now Last make a Store variable like,

    const store = const store = legacy_createStore(
                    rootReducer,
                    initialState,
                    applyMiddleware(...middleWare)
                  );

S11 :- Now Export to React Like Normal Redux.

S12 :- Make a File Action like, 

import axios from "axios";
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from "../constants/userContant";

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        err.data && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

S13: Make a Reducer File Normal Redux.
