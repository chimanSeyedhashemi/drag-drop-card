import { Board } from ".";
import { renderWithRedux } from "../../script/testUtility";

test("renders Board component", () => {
  renderWithRedux(<Board />);
});
