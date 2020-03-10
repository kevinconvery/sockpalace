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

  // Retrieves data based on the task provided to the getData function.
  // e.g. DEALS retrieves the Deals view's data, etc.
  export const getData = async view => {
    try {
      switch(view) {
        case "DEALS":
          const response = await fetch('/products/discount/0')
          // const data = await response.json()
          return await response.json()
        case "SALES": break;
        case "MAIN": break;
        default: break
      }
    } catch (err) {
      console.error(err)
    }
  }