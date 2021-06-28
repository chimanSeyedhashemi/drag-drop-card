import { actionRemoveUsers } from "../../redux/action/users";
import { renderWithRedux, screen, fireEvent } from "../../script/testUtility";
import { UserCard } from "./UserCard";

describe("render UserCard Component", () => {
  const user = {
    title: "user1",
    id: "1",
  };

  test("renders UserCard component", () => {
    renderWithRedux(<UserCard user={user} />);
    const linkElement = screen.getByText(user.title);
    expect(linkElement).toBeInTheDocument();
  });

  test("remove user", () => {
    renderWithRedux(<UserCard user={user} />);
    fireEvent.click(screen.getByTestId("remove"));
  });
});
