import { IUser } from "../../../model/user";
import { EACTIONS } from "../../actionsEnum";
import { UsersAction } from "./action.users";

export function actionAddUsers(users: Array<IUser>): UsersAction {
  return {
    type: EACTIONS.ADD_USER,
    payload: users,
  };
}

export function actionRemoveUsers(users: Array<IUser>): UsersAction {
  return {
    type: EACTIONS.REMOVE_USER,
    payload: users,
  };
}

export function actionArrngeUsers(users: Array<IUser>): UsersAction {
  return {
    type: EACTIONS.ARRANGE_USER,
    payload: users,
  };
}
