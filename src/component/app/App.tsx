import { Board } from "../board";
import { Footer } from "../footer";
import { Header } from "../header";
import style from "./app.module.scss";

interface IProps {}

const App = (props: IProps) => {
  return (
    <>
      <div className={style.appWrapper}>
        <Header />
        <Board />
        <Footer />
      </div>
    </>
  );
};

export { App };
