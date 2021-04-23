import { useState } from "react";
import { calculatePrice } from "./calculatePrice";
import { getUpdatedToppingArray } from "./getUpdatedToppingArray"  

export function PizzaConstructor() {
  const [size, setSize] = useState(30);
  const [dough, setDough] = useState("deep-dish");
  const [sauce, setSauce] = useState("tomato-sauce");
  const [cheese, setCheese] = useState([]);
  const [greens, setGreens] = useState([]);
  const [meat, setMeat] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const totalPrice = calculatePrice({
    size,
    cheese,
    greens,
    meat,
  });

  function selectSize(evt) {
    const value = Number.parseInt(evt.target.value);
    setSize(value);
  }

  function selectDough(evt) {
    setDough(evt.target.value);
  }

  function selectSauce(evt) {
    setSauce(evt.target.value);
  }

  function selectCheese(evt) {
    setCheese(getUpdatedToppingArray(cheese, evt.target.value));
  }

  function selectGreens(evt) {
    setGreens(getUpdatedToppingArray(greens, evt.target.value));
  }

  function selectMeat(evt) {
    setMeat(getUpdatedToppingArray(meat, evt.target.value));
  }

  function resetState() {
    setCheese([]);
    setGreens([]);
    setMeat([]);
    setSize(30);
    setSauce("tomato");
  }

  function showOrder(evt) {
    evt.preventDefault();
    const order = cheese.concat(greens, meat);
    setOrderItems(order);
    resetState();
  }

  return (
    <div>
      <form className="constructor" onSubmit={showOrder}>
        <div className="constructor__block">
          <label htmlFor="size-30">
            <input
              onChange={selectSize}
              checked={size === 30}
              data-testid="size-30"
              type="radio"
              value={30}
              name="size"
              id="size-30"
            />
            30cm
          </label>
          <label htmlFor="size-35">
            <input
              onChange={selectSize}
              checked={size === 35}
              data-testid="size-35"
              type="radio"
              value={35}
              name="size"
              id="size-35"
            />
            35cm
          </label>
        </div>
        <div className="constructor__block">
          <input
            onChange={selectDough}
            checked={dough === "deep-dish"}
            data-testid="deep-dish"
            type="radio"
            value="deep-dish"
            name="dough"
          />{" "}
          Deep-dish pizza
          <input
            onChange={selectDough}
            checked={dough === "thin-crust"}
            data-testid="thin-crust"
            type="radio"
            value="thin-crust"
            name="dough"
          />{" "}
          Thin-crust pizza
        </div>
        <div className="constructor__block">
          <input
            onChange={selectSauce}
            checked={sauce === "tomato-sauce"}
            type="radio"
            data-testid="tomato-sauce"
            value="tomato-sauce"
            name="sauce"
          />{" "}
          Tomato sauce
          <input
            onChange={selectSauce}
            checked={sauce === "white-sauce"}
            type="radio"
            value="white-sauce"
            data-testid="white-sauce"
            name="sauce"
          />{" "}
          White sauce
          <input
            onChange={selectSauce}
            checked={sauce === "chilli-sauce"}
            type="radio"
            value="chilli-sauce"
            data-testid="chilli-sauce"
            name="sauce"
          />{" "}
          Chilli sauce
        </div>
        <div className="constructor__block">
          <input
            type="checkbox"
            onChange={selectCheese}
            data-testid="cheese-mozzarella"
            value="mozzarella"
            name="cheese"
          />{" "}
          Mozzarella
          <input
            type="checkbox"
            onChange={selectCheese}
            value="cheddar"
            data-testid="cheese-cheddar"
            name="cheese"
          />{" "}
          Cheddar
          <input
            type="checkbox"
            onChange={selectCheese}
            value="dor-blue"
            data-testid="cheese-dor-blue"
            name="cheese"
          />{" "}
          Dor blue
        </div>
        <div className="constructor__block">
          <input
            type="checkbox"
            data-testid="greens-tomato"
            onChange={selectGreens}
            value="tomato"
            name="greens"
          />{" "}
          Tomato
          <input
            type="checkbox"
            data-testid="greens-mushrooms"
            onChange={selectGreens}
            value="mushrooms"
            name="greens"
          />{" "}
          Mushrooms
          <input
            type="checkbox"
            data-testid="greens-pepper"
            onChange={selectGreens}
            value="pepper"
            name="greens"
          />{" "}
          Pepper
        </div>
        <div className="constructor__block">
          <input
            type="checkbox"
            data-testid="meat-bacon"
            onChange={selectMeat}
            value="bacon"
            name="meat"
          />{" "}
          Bacon
          <input
            type="checkbox"
            onChange={selectMeat}
            data-testid="meat-pepperoni"
            value="pepperoni"
            name="meat"
          />{" "}
          Pepperoni
          <input
            type="checkbox"
            onChange={selectMeat}
            data-testid="meat-ham"
            value="ham"
            name="meat"
          />{" "}
          Ham
        </div>
        <button type="submit">Make order</button>
      </form>
      <p>Ingredients: {orderItems.join(", ")}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}