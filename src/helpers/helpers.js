  // Returns the currency as a string amount.
  export const convertToCurrency = amount => {
    const dollars = Math.floor(amount / 100);
    let cents = amount % 100;
    if (cents === 0) {
      cents = '00';
    } else if (cents < 10) {
      cents = `0${cents}`;
    } else {
      cents = `${cents}`;
    }
    return `${dollars}.${cents}`;
  }

  // Applies the discount on the product to the item,
  // returning the discounted price
  export const applyDiscount = item => {
    const discountedPrice = item.sale_price - Math.floor(item.sale_price * (item.discount / 100));
    return convertToCurrency(discountedPrice);
  }