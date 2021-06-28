import { App } from "./App";
import { renderWithRedux } from "../../script/testUtility";

test("renders App component", () => {
  renderWithRedux(<App />);
});
