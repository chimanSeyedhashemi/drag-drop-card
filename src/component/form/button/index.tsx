import React, { ButtonHTMLAttributes } from "react";
import style from "./button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const AppButton = (props: IProps) => {
  const propsWithoutClassName = (
    props: IProps
  ): ButtonHTMLAttributes<HTMLButtonElement> => {
    let newP = { ...props };
    delete newP.className;

    return newP;
  };

  return (
    <>
      <button
        className={`${style.btn} ${props.className}`}
        {...propsWithoutClassName(props)}
      >
        {props.children}
      </button>
    </>
  );
};

export default AppButton;
