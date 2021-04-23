import { PizzaConstructor } from "./PizzaConstructor";
import { render, fireEvent } from "@testing-library/react";

describe("Constructor", () => {
  it("renders correctly", () => {
    const { container } = render(<PizzaConstructor />);
    expect(container).toContainHTML("35cm");
    expect(container).toContainHTML("30cm");
    expect(container).toContainHTML("Thin-crust pizza");
    expect(container).toContainHTML("Deep-dish pizza");
    expect(container).toContainHTML("Tomato sauce");
    expect(container).toContainHTML("White sauce");
    expect(container).toContainHTML("Chilli sauce");
    expect(container).toContainHTML("Mozzarella");
    expect(container).toContainHTML("Cheddar");
    expect(container).toContainHTML("Tomato");
    // TODO: test is false negative bc of "Tomato sauce"
    expect(container).toContainHTML("Mushrooms");
    expect(container).toContainHTML("Pepper");
    expect(container).toContainHTML("Bacon");
    expect(container).toContainHTML("Pepperoni");
    expect(container).toContainHTML("Ham");
    expect(container).toContainHTML("Total Price: 200");
  });

  describe("on pizza size change", () => {
    it("updates pizza size radio buttons state", () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId("size-30")).toBeChecked();

      fireEvent.click(getByTestId("size-35"));

      expect(getByTestId("size-30")).not.toBeChecked();
      expect(getByTestId("size-35")).toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConstructor />);
      fireEvent.click(getByTestId("size-35"));

      expect(container).toContainHTML("Total Price: 250");
    });
  });

  describe("on pizza dough change", () => {
    it("updates dough radio buttons state", () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId("deep-dish")).toBeChecked();

      fireEvent.click(getByTestId("thin-crust"));

      expect(getByTestId("deep-dish")).not.toBeChecked();
      expect(getByTestId("thin-crust")).toBeChecked();
    });
  });

  describe("on sauce change", () => {
    it("updates sauce radio buttons state", () => {
      const { getByTestId } = render(<PizzaConstructor />);

      expect(getByTestId("tomato-sauce")).toBeChecked();
      expect(getByTestId("white-sauce")).not.toBeChecked();
      expect(getByTestId("chilli-sauce")).not.toBeChecked();

      fireEvent.click(getByTestId("white-sauce"));
      expect(getByTestId("white-sauce")).toBeChecked();
      expect(getByTestId("tomato-sauce")).not.toBeChecked();
    });
  });

  describe("on cheese change", () => {
    it("updates cheese checkboxes state", () => {
      const { getByTestId } = render(<PizzaConstructor />);

      expect(getByTestId("cheese-mozzarella")).not.toBeChecked();
      expect(getByTestId("cheese-cheddar")).not.toBeChecked();
      expect(getByTestId("cheese-dor-blue")).not.toBeChecked();

      fireEvent.click(getByTestId("cheese-mozzarella"));
      fireEvent.click(getByTestId("cheese-cheddar"));

      expect(getByTestId("cheese-mozzarella")).toBeChecked();
      expect(getByTestId("cheese-cheddar")).toBeChecked();
      expect(getByTestId("cheese-dor-blue")).not.toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId("cheese-mozzarella"));
      fireEvent.click(getByTestId("cheese-cheddar"));

      expect(container).toContainHTML("Total Price: 258");
    });
  });

  describe("on greens change", () => {
    it("updates greens checkboxes state", () => {
      const { getByTestId } = render(<PizzaConstructor />);

      expect(getByTestId("greens-tomato")).not.toBeChecked();
      expect(getByTestId("greens-mushrooms")).not.toBeChecked();
      expect(getByTestId("greens-pepper")).not.toBeChecked();

      fireEvent.click(getByTestId("greens-pepper"));
      fireEvent.click(getByTestId("greens-mushrooms"));

      expect(getByTestId("greens-tomato")).not.toBeChecked();
      expect(getByTestId("greens-mushrooms")).toBeChecked();
      expect(getByTestId("greens-pepper")).toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId("greens-pepper"));
      fireEvent.click(getByTestId("greens-mushrooms"));

      expect(container).toContainHTML("Total Price: 258");
    });
  });

  describe("on meat change", () => {
    it("updates meat checkboxes state", () => {
      const { getByTestId } = render(<PizzaConstructor />);

      expect(getByTestId("meat-bacon")).not.toBeChecked();
      expect(getByTestId("meat-pepperoni")).not.toBeChecked();
      expect(getByTestId("meat-ham")).not.toBeChecked();

      fireEvent.click(getByTestId("meat-bacon"));
      fireEvent.click(getByTestId("meat-pepperoni"));

      expect(getByTestId("meat-bacon")).toBeChecked();
      expect(getByTestId("meat-pepperoni")).toBeChecked();
      expect(getByTestId("meat-ham")).not.toBeChecked();
    });
    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId("meat-bacon"));
      fireEvent.click(getByTestId("meat-pepperoni"));

      expect(container).toContainHTML("Total Price: 258");
    });
  });

  describe("on submit", () => {
    it("renders the selected ingredients list", () => {
      const { container, getByTestId, getByRole } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId("meat-bacon"));
      fireEvent.click(getByTestId("meat-pepperoni"));

      fireEvent.click(getByRole("button"));

      expect(container).toContainHTML("Ingredients: bacon, pepperoni");
    });
  });
});
