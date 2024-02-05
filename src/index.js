export function calculateTotal (items, tax) {
  let number = 0;
  for(let i = 0; i < items.length; i++){
    if(items[i].taxable){
      number += items[i].price * Math.abs(tax);
    }
    number += items[i].price;
  }

  return number;
}
