const calculateDiscount = () => {
  const item1 = parseFloat(document.getElementById('item1').value);
  const item2 = parseFloat(document.getElementById('item2').value);

  if (isNaN(item1) || isNaN(item2)) {
      document.getElementById('result').innerText = 'Please enter valid numbers for the item costs.';
      return;
  }

  let total = item1 + item2;

  let discount = 0;
  if (total > 100) {
      discount = total * 0.1;
      total -= discount;
      document.getElementById('result').innerText = `Your total purchase is $${total.toFixed(2)}, which includes your 10% discount.`;
  } else if (total > 50) {
      discount = total * 0.05;
      total -= discount;
      document.getElementById('result').innerText = `Your total purchase is $${total.toFixed(2)}, which includes your 5% discount.`;
  } else {
      document.getElementById('result').innerText = `Your total purchase is $${total.toFixed(2)}.`;
  }
}