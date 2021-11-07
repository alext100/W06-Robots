import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { getRobots } from "../../factories/robotsFactory";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store/index";
import CardList from "./CardList";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a CardList component", () => {
  describe("When it rendered", () => {
    test("Then it should show the card info", async () => {
      const robots = getRobots();

      const store = configureStore();
      render(
        <Provider store={store}>
          <CardList robots={robots} />
        </Provider>
      );
      const textToFind = await screen.findByText("Nao");

      expect(textToFind).toBeInTheDocument();
    });
  });
});
