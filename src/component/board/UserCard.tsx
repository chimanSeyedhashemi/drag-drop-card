import React, { DragEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../model/user";
import { actionArrngeUsers, actionRemoveUsers } from "../../redux/action/users";
import { IReduxState } from "../../redux/appState";
import AppButton from "../form/button";
import style from "./userCard.module.scss";

interface IProps {
  user: IUser;
}

/**
 * setWidth function get the number of cards and return the width of cards
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 * @param - first input get the number of cards
 *
 * @return - return the width of card in string
 *
 * @beta
 */

const setWidth = (count: number): string => {
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const users: Array<IUser> = useSelector((state: IReduxState) => state.users);
  const dispatch = useDispatch();

  /**
   * this useefect set the card width based on change in users
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   * @beta
   */

  useEffect(() => {
    cardRef.current!.style.width = setWidth(users.length);
  }, [users]);

  /**
   * handleRemoveUser function remove user from the users list
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   * @beta
   */

  const handleRemoveUser = (): void => {
    const newUsers: Array<IUser> = users.filter(
      (user) => user.id !== props.user.id
    );

    dispatch(actionRemoveUsers(newUsers));
    cardRef.current!.style.width = setWidth(newUsers.length);
  };

  /**
   * handleDrop function change the cards location based on drag and drops
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   * @beta
   */

  const handleDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();

    const from: string = ev.dataTransfer.getData("text");
    const to: string = (ev as any).target.id;
    if (!from || !to) return;
    const newUsers: Array<IUser> = [...users];
    const fromIndex: number = newUsers.findIndex((user) => user?.id === from);
    const toIndex: number = newUsers.findIndex((user) => user?.id === to);
    newUsers[fromIndex] = users[toIndex];
    newUsers[toIndex] = users[fromIndex];

    dispatch(actionArrngeUsers(newUsers));
  };

  /**
   * ondragover function preventDefult when droping occure
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   * @beta
   */
  const ondragover = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  /**
   * ondragstart function set the drop card id
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   *
   * @beta
   */
  const ondragstart = (ev: DragEvent<HTMLDivElement>) => {
    ev.dataTransfer!.setData("text", (ev as any).target!.id);
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
