import { IUser } from "../../../model/user";
import { UsersAction } from "../../action/users/action.users";
import { EACTIONS } from "../../actionsEnum";

const defaultState: Array<IUser> = [];

export function reducer(
  state: Array<IUser> = defaultState,
  action: UsersAction
): Array<IUser> {
  switch (action.type) {
    case EACTIONS.ADD_USER:
      return action.payload;
    case EACTIONS.REMOVE_USER:
      return action.payload;
    case EACTIONS.ARRANGE_USER:
      return action.payload;
    default:
      return state ? state : defaultState;
  }
}
