import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/test-utils";
import FormComponent from "./FormComponent";

describe("Given a Form Component", () => {
  describe("When it rendered", () => {
    test("Then it should show five inputs and submit button", () => {
      renderWithProviders(<FormComponent />);

      const nameInput = screen.getByLabelText(/Nombre/i);
      const imageInput = screen.getByLabelText(/Url of image/i);
      const speedInput = screen.getByLabelText(/Velocidad/i);
      const resiliencyInput = screen.getByLabelText(/Resistencia/i);
      const dateInput = screen.getByLabelText(/Fecha/i);
      const button = screen.getByRole("button", { name: /create/i });

      expect(nameInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(resiliencyInput).toBeInTheDocument();
      expect(dateInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types in the name input", () => {
    test("Then it should render a name input with the typed text inside", () => {
      renderWithProviders(<FormComponent />);
      const typedWord = "ROBOT_NAME";

      const nameInput = screen.getByLabelText(/Nombre/i);
      userEvent.type(nameInput, typedWord);

      expect(nameInput).toHaveValue(typedWord);
    });
  });
});
