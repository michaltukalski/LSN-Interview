import { createReducer, on } from '@ngrx/store';
import { UserData } from '../../interfaces/userData';
import { UsersDataActions } from '../actions';


export interface UsersDataState {

  users: { [key: number]: UserData };
}

export const initialState: UsersDataState = {
  users: null
};


export const usersDataReducer = createReducer(
  initialState,

  on(UsersDataActions.LoadSuccess, (state, {users}) => ({
    ...state,
    ...users,

  })),
);
