import style from "./header.module.scss";

interface IProps {}

export const Header = (props: IProps) => {
  return <div className={style.headerWrapper}>header</div>;
};
