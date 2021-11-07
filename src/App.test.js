import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store";

describe("Given a app component", () => {
  describe("When it's rendered", () => {
    test("It should show input form group with heading and inputs", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const formGroup = screen.getAllByRole("heading", {
        name: /Create Robot/i,
      });
      const inputName = screen.getAllByRole("textbox", {
        name: /Nombre de robot/i,
      });

      expect(formGroup[0]).toBeInTheDocument();
      expect(inputName[0]).toBeInTheDocument();
    });
  });
});
