const SIZE_PRICE = 50;
const INGREDIENT_PRICE = 29;
const DEFAULT_PRICE = 200;

export const calculatePrice = ({
  size, cheese, greens, meat,
}) => {
  let price = DEFAULT_PRICE;
  if (size === 35) {
    price += SIZE_PRICE;
  }
  cheese.forEach(() => {
    price += INGREDIENT_PRICE;
  });
  greens.forEach(() => {
    price += INGREDIENT_PRICE;
  });
  meat.forEach(() => {
    price += INGREDIENT_PRICE;
  });

  return price;
};
