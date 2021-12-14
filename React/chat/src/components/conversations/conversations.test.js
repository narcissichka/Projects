import { ChatBar } from "./conversations";
import { renderWithRedux } from "../../utils/render-with-redux";

let state = null;

beforeEach(() => {
  state = {
    messages: {
      messages: {
        room1: [{ id: 1, author: "User", text: "test" }],
      },
    },
  };
});

describe("Chat component", () => {
  it("should render Chat with title prop", () => {
    const { container } = renderWithRedux(<ChatBar title="room1" />, state);

    const titleNode = container.querySelector(".chatName");
    const messageNode = container.querySelector(".text");
    console.log(titleNode);
    expect(titleNode).toHaveTextContent("room1");
    expect(messageNode).toHaveTextContent("test");
  });
  it("should render Chat with selected prop", () => {
    const { getByTestId } = renderWithRedux(
      <ChatBar title="room1" selected={true} />,
      state
    );
    expect(getByTestId("wrapper")).toHaveClass("Mui-selected");
  });
});
