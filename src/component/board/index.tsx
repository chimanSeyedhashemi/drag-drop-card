import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { IUser } from "../../model/user";
import { IReduxState } from "../../redux/appState";
import { UserCard } from "./UserCard";
import style from "./userCard.module.scss";

interface IProps {
  users: Array<IUser>;
}

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
