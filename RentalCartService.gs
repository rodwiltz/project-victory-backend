function addItemToRentalCart(cartData) {
  cartData = cartData || {};

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Rental Cart");

  if (!sheet) {
    throw new Error('Sheet "Rental Cart" not found.');
  }

  if (!cartData.agreementNumber) {
    throw new Error("Agreement number is required.");
  }

  if (!cartData.cartId) {
    throw new Error("Cart ID is required.");
  }

  if (!cartData.itemId) {
    throw new Error("Item ID is required.");
  }

  const existingItems = sheet.getDataRange().getValues();

  for (let i = 1; i < existingItems.length; i++) {
    const existingCartId = existingItems[i][1];
    const existingItemId = existingItems[i][2];

    if (
      existingCartId === cartData.cartId &&
      existingItemId === cartData.itemId
    ) {
      return {
        added: false,
        duplicate: true,
        message: cartData.itemId + " is already in this cart."
      };
    }
  }

  sheet.appendRow([
    cartData.agreementNumber,
    cartData.cartId,
    cartData.itemId,
    new Date()
  ]);

  return {
    added: true,
    duplicate: false,
    message: cartData.itemId + " added to cart."
  };
}

function testAddItemToRentalCart() {
  const result = addItemToRentalCart({
    agreementNumber: "TEST-001",
    cartId: "CART-TEST",
    itemId: "RECT1"
  });

  Logger.log(result.message);
}
function getRentalCart(cartId) {

function removeItemFromRentalCart(cartId, itemId) {

function getRentalCartCount(cartId) {

  const cart = getRentalCart(cartId);

  return {
    count: cart.length
  };

}

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Rental Cart");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (
      data[i][1] === cartId &&
      data[i][2] === itemId
    ) {

      sheet.deleteRow(i + 1);

      return {
        removed: true,
        message: itemId + " removed from cart."
      };

    }

  }

  return {
    removed: false,
    message: itemId + " was not found in the cart."
  };

}

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Rental Cart");

  const data = sheet.getDataRange().getValues();

  const cart = [];

  for (let i = 1; i < data.length; i++) {

    if (data[i][1] === cartId) {

      cart.push({
        agreementNumber: data[i][0],
        cartId: data[i][1],
        itemId: data[i][2],
        timeAdded: data[i][3]
      });

    }

  }

  return cart;

}
