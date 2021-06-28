import { Footer } from ".";
import { actionRemoveUsers } from "../../redux/action/users";
import { renderWithRedux, screen, fireEvent } from "../../script/testUtility";

describe("render UserCard Component", () => {
  const user = {
    title: "user1",
    id: "1",
  };

  test("renders Footer component", () => {
    renderWithRedux(<Footer />);
  });

  test("add user", () => {
    renderWithRedux(<Footer />);
    fireEvent.click(screen.getByTestId("add"));
  });
});
