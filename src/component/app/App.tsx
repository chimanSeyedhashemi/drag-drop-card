import React from "react";
import { Board } from "../board";
import { Footer } from "../footer";
import { Header } from "../header";
import style from "./app.module.scss";

/**
 * App Component retyrn the body of project
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 *
 * @beta
 */

const App = () => {
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
