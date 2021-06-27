import userEvent from "@testing-library/user-event";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { IUser } from "../../model/user";
import { actionArrngeUsers, actionRemoveUsers } from "../../redux/action/users";
import { IReduxState } from "../../redux/appState";
import AppButton from "../form/button";
import style from "./userCard.module.scss";

interface IProps {
  user: IUser;
}

const setWidth = (count: number) => {
  switch (count) {
    case 1:
      return "99%";
    case 2:
    case 3:
    case 4:
      return "46%";
    case 5:
    case 6:
      return "30%";
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return "22%";
    default:
      return "99%";
  }
};

export const UserCard = (props: IProps) => {
  const users: Array<IUser> = useSelector((state: IReduxState) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    cardRef.current!.style.width = setWidth(users.length);
  }, [users]);
  const handleRemoveUser = () => {
    const newUsers: Array<IUser> = users.filter(
      (user) => user.id !== props.user.id
    );

    dispatch(actionRemoveUsers(newUsers));
    cardRef.current!.style.width = setWidth(newUsers.length);
  };
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleDrop = (ev: any) => {
    ev.preventDefault();

    const from = ev.dataTransfer.getData("text");
    const to = ev.target.id;
    if (!from || !to) return;
    const newUsers = [...users];
    const fromIndex = newUsers.findIndex((user) => user?.id === from);
    const toIndex = newUsers.findIndex((user) => user?.id === to);
    newUsers[fromIndex] = users[toIndex];
    newUsers[toIndex] = users[fromIndex];

    dispatch(actionArrngeUsers(newUsers));
  };
  const ondragover = (ev: any) => {
    ev.preventDefault();
  };
  const ondragstart = (ev: any) => {
    ev.dataTransfer!.setData("text", ev.target!.id);
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={ondragover}
        className={style.userCard}
        ref={cardRef}
        id={props.user?.id}
        draggable
        onDragStart={ondragstart}
        // onDrag={handleDrag}
      >
        <AppButton className={style.removeBtn} onClick={handleRemoveUser}>
          <img src="/trash.svg" />
        </AppButton>

        <div>{props.user?.title}</div>
      </div>
    </>
  );
};
