import { AppFlowEffects } from './appFlow.effects';
import { UsersDataEffects } from './usersData.effects';
import { UserActivityEffects } from './userActivity.effects';

const effects = [
  UsersDataEffects,
  AppFlowEffects,
  UserActivityEffects
];
export {
  effects,
  UsersDataEffects,
  AppFlowEffects,
  UserActivityEffects
};
