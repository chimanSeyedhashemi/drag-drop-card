import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IUser } from "../../model/user";
import { actionAddUsers } from "../../redux/action/users";
import { IReduxState } from "../../redux/appState";
import { uuid } from "../../script/utility";
import AppButton from "../form/button";
import style from "./footer.module.scss";

interface IProps {
  users: Array<IUser>;
  addUser: (users: Array<IUser>) => void;
}

/**
 * App Component return the footer
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 *
 * @param props - The props of component include users and add user action from the redux
 *
 * @beta
 */

const FooterComponent = (props: IProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  /**
   * this useeffect handle the disabled for add button
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   *
   * @beta
   */

  useEffect(() => {
    const userCount: number = props.users.length;
    if (userCount > 11) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.users]);

  /**
   * handleAddUser function add new user to the users list
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   *
   * @beta
   */

  const handleAddUser = () => {
    const newUsers: Array<IUser> = [...props.users];
    const userCount: number = props.users.length;

    newUsers.push({ title: `user${userCount + 1}`, id: uuid() });
    props.addUser(newUsers);
  };

  return (
    <div className={style.footerWrapper}>
      <AppButton
        className={style.addBtn}
        onClick={handleAddUser}
        disabled={disabled}
      >
        +
      </AppButton>
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addUser: (users: Array<IUser>) => dispatch(actionAddUsers(users)),
  };
};

export const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent);
