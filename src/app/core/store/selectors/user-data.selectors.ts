import * as fromUsersDataReducer from './../reducers/users-data.reducer';
import { UsersDataState, usersDataReducer } from './../reducers/users-data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUsersDataState = createFeatureSelector<UsersDataState>('usersData');

export const getUsers = createSelector(
  getUsersDataState,
  fromUsersDataReducer.usersData
);
