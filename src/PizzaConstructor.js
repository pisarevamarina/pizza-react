import { useState } from 'react';
import { calculatePrice } from './halpers/calculatePrice';
import { getUpdatedToppingArray } from './halpers/getUpdatedToppingArray';

export function PizzaConstructor() {
  const [size, setSize] = useState(30);
  const [dough, setDough] = useState('deep-dish');
  const [sauce, setSauce] = useState('tomato');
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
    setSauce('tomato');
  }

  function showOrder(evt) {
    evt.preventDefault();
    const order = cheese.concat(greens, meat);
    setOrderItems(order);
    resetState();
  }

  return (
    <div>
      <form
        className="constructor"
        onSubmit={showOrder}
      >
        <div className="constructor__block">
          <label htmlFor="size-30">
            <input
              onChange={selectSize}
              checked={size === 30}
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
              type="radio"
              value={35}
              name="size"
              id="size-35"
            />
            35cm
          </label>
        </div>
        <div className="pizza-constructor__input-block">
          <label htmlFor="deep-dish">
            <input
              onChange={selectDough}
              checked={dough === 'deep-dish pizza'}
              type="radio"
              value="deep-dish pizza"
              name="dough"
              id="deep-dish"
            />
            Deep-dish pizza
          </label>
          <label htmlFor="thin-crust">
            <input
              onChange={selectDough}
              checked={dough === 'thin-crust pizza'}
              type="radio"
              value="thin-crust pizza"
              name="dough"
              id="thin-crust"
            />
            Thin-crust pizza
          </label>
        </div>
        <div className="pizza-constructor__input-block">
          <label htmlFor="tomato-sauce">
            <input
              onChange={selectSauce}
              checked={sauce === 'tomato sauce'}
              type="radio"
              value="tomato-sauce"
              name="sauce"
              id="tomato-sauce"
            />
            Tomato sauce
          </label>
          <label htmlFor="white-sauce">
            <input
              onChange={selectSauce}
              checked={sauce === 'white sauce'}
              type="radio"
              value="white sauce"
              name="sauce"
              id="white-sauce"
            />
            White sauce
          </label>
          <label htmlFor="chilli-sauce">
            <input
              onChange={selectSauce}
              checked={sauce === 'chilli-sauce'}
              type="radio"
              value="chilli-sauce"
              name="sauce"
              id="chilli-sauce"
            />
            Chilli sauce
          </label>

        </div>
        <div className="pizza-constructor__input-block">
          <label htmlFor="mozzarella">
            <input
              type="checkbox"
              checked={cheese.includes('mozzarella')}
              onChange={selectCheese}
              value="mozzarella"
              name="cheese"
              id="mozzarella"
            />
            Mozzarella
          </label>
          <label htmlFor="cheddar">
            <input
              type="checkbox"
              checked={cheese.includes('cheddar')}
              onChange={selectCheese}
              value="cheddar"
              name="cheese"
              id="cheddar"
            />
            Cheddar
          </label>
          <label htmlFor="dor-blue">
            <input
              type="checkbox"
              checked={cheese.includes('dor-blue')}
              onChange={selectCheese}
              value="dor-blue"
              name="cheese"
              id="dor-blue"
            />
            Dor blue
          </label>
        </div>
        <div className="pizza-constructor__input-block">
          <label htmlFor="tomato">
            <input
              type="checkbox"
              checked={greens.includes('tomato')}
              onChange={selectGreens}
              value="tomato"
              name="greens"
              id="tomato"
            />
            Tomato
          </label>
          <label htmlFor="mushrooms">
            <input
              type="checkbox"
              checked={greens.includes('mushrooms')}
              onChange={selectGreens}
              value="mushrooms"
              name="greens"
              id="mushrooms"
            />
            Mushrooms
          </label>
          <label htmlFor="pepper">
            <input
              type="checkbox"
              checked={greens.includes('pepper')}
              onChange={selectGreens}
              value="pepper"
              name="greens"
            />
            Pepper
          </label>
        </div>
        <div className="pizza-constructor__input-block">
          <label htmlFor="bacon">
            <input
              type="checkbox"
              checked={meat.includes('bacon')}
              onChange={selectMeat}
              value="bacon"
              name="meat"
              id="bacon"
            />
            Bacon
          </label>
          <label htmlFor="pepperoni">
            <input
              type="checkbox"
              checked={meat.includes('pepperoni')}
              onChange={selectMeat}
              value="pepperoni"
              name="meat"
              id="pepperoni"
            />
            Pepperoni
          </label>
          <label htmlFor="ham">
            <input
              type="checkbox"
              checked={meat.includes('ham')}
              onChange={selectMeat}
              value="ham"
              name="meat"
              id="ham"
            />
            Ham
          </label>
        </div>
        <button type="submit">Make order</button>
      </form>
      <p>
        Ingredients:
        {orderItems}
      </p>
      <p>
        Total Price:
        {totalPrice}
      </p>
    </div>
  );
}
