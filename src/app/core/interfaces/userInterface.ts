import { UserRoles } from './../constants/userRoles';

export interface UserInterface {
  username: string;
  firstName: string;
  lastName: string;
  role: UserRoles.Admin | UserRoles.User;
  enabled: boolean;
}
