import React, { ButtonHTMLAttributes } from "react";
import style from "./button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * AppButton is a costum button based project
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 * @param - props of button
 *
 * @return - return the AppButton component
 *
 * @beta
 */

const AppButton = (props: IProps) => {
  /**
   * propsWithoutClassName is a function which remone className in props type for adding in the other way
   *
   * @remarks
   * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
   *
   * @param - props of button
   *
   * @return - return the new props
   *
   * @beta
   */
  const propsWithoutClassName = (
    props: IProps
  ): ButtonHTMLAttributes<HTMLButtonElement> => {
    let newP: IProps = { ...props };
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
