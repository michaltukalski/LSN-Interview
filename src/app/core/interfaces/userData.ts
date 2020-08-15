import { UserRoles } from '../constants/userRoles';

export interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  role: UserRoles.Admin | UserRoles.User;
  enabled: boolean;
}
