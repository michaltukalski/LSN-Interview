import { UserActivityActions } from '@app/core/store/actions';
import { createReducer, on, Action } from '@ngrx/store';
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
    users

  })),

  on(UserActivityActions.DeleteUserConfirmed, (state, {user}) => ({
    ...state,
    users: Object.values(state.users).filter(tempUser => tempUser.username !== user.username)
  })),
);

export function reducer(state: UsersDataState | undefined, action: Action) {
  return usersDataReducer (state, action);
}

export const usersData = (state: UsersDataState) => state.users;
