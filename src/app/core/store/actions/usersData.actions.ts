import { UserData } from './../../interfaces/userData';
import { createAction, props } from '@ngrx/store';

export const LoadRequested = createAction('[Users Data] Load Requested');
export const LoadSuccess = createAction('[Users Data] Load Success', props<{ users: UserData[] }>());
