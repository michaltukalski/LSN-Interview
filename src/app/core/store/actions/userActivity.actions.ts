import { UserData } from '../../interfaces/userData';
import { createAction, props } from '@ngrx/store';


export const DeleteUser = createAction('[User Activity Actions] Delete User', props<{ user: UserData }>());
export const DeleteUserConfirmed = createAction('[User Activity Actions] Delete User Confirmed', props<{ user: UserData }>());
export const ModifyUser = createAction('[User Activity Actions] Modify User', props<{ user: UserData }>());
export const AddUser = createAction('[User Activity Actions] Add User', props<{ user: {} }>());
