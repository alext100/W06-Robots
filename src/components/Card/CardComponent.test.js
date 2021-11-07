import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/test-utils";
import CardComponent from "./CardComponent";

describe("Given a Card component", () => {
  describe("When it rendered", () => {
    test("Then it shoul show two buttons, robots image and list of caracteristics", () => {
      renderWithProviders(<CardComponent />);

      const updateButton = screen.getByRole("button", { name: "Update" });
      const deleteButton = screen.getByRole("button", { name: "Delete" });
      const robotImage = screen.getByAltText("Robot image");
      const listOfCaracteristics = screen.getByTestId(
        "List-of-robot-caracteristics"
      );

      expect(updateButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
      expect(robotImage).toBeInTheDocument();
      expect(listOfCaracteristics).toBeInTheDocument();
    });
  });
});
