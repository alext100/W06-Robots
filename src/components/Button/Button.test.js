import ButtonComponent from "./ButtonComponent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives a click", () => {
    test("Then it should call the actionOnClick function", () => {
      const actionOnClick = jest.fn();

      render(<ButtonComponent actionOnClick={actionOnClick} />);
      const clickElement = screen.getByRole("button");
      userEvent.click(clickElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
  describe("When it receives a value", () => {
    test("Then it should render it", () => {
      const buttonText = "Create";

      render(<ButtonComponent value={buttonText} />);
      const textElement = screen.getByRole("button");

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it receives a className value", () => {
    test("Then it should be a button with this className in the document", () => {
      const classNameButton = "create-button";

      render(<ButtonComponent className={classNameButton} />);
      const classNameElement = screen.getByRole("button", {
        class: "create-button",
      });

      expect(classNameElement).toHaveClass("create-button");
    });
  });
});
