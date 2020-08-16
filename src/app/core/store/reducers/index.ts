import * as usersDataReducer from './users-data.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<{}> = {
  usersData: usersDataReducer.reducer
};
