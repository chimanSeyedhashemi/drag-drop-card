import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { IUser } from "../../model/user";
import { IReduxState } from "../../redux/appState";
import { UserCard } from "./UserCard";
import style from "./userCard.module.scss";

interface IProps {
  users: Array<IUser>;
}

/**
 * App Component return the board of users card
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 *
 * @param props - The props of component
 *
 * @beta
 */

const BoardComponent = (props: IProps) => {
  return (
    <div className={style.board}>
      {props.users.map((item, index) => {
        return <UserCard user={item} key={index} />;
      })}
    </div>
  );
};
const mapStateToProps = (state: IReduxState) => {
  return {
    users: state.users,
  };
};

export const Board = connect(mapStateToProps, {})(BoardComponent);
