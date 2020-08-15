import { UserData } from './../../interfaces/userData';
import { createAction, props } from '@ngrx/store';

export const LoadSuccess = createAction('[Users Data] Load Success', props<{ users: UserData[] }>());
