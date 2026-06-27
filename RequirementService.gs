function getRentalRequirements(agreementNumber) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Rental Items");

  const data = sheet.getDataRange().getValues();
  const requirements = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === agreementNumber) {
      requirements.push({
        agreementNumber: data[i][0],
        cartId: data[i][1],
        category: data[i][2],
        requiredQty: Number(data[i][3])
      });
    }
  }

  return requirements;
}

function getRequirementStatus(agreementNumber) {
  const requirements = getRentalRequirements(agreementNumber);
  const status = [];

  for (let i = 0; i < requirements.length; i++) {
    const cart = getRentalCart(requirements[i].cartId);
    let loadedQty = 0;

    for (let j = 0; j < cart.length; j++) {
      const category = getInventoryCategory(cart[j].itemId);

      Logger.log(
        "Cart item: " +
        cart[j].itemId +
        " | Inventory category: " +
        category +
        " | Required category: " +
        requirements[i].category
      );

      if (category === requirements[i].category) {
        loadedQty++;
      }
    }

    status.push({
      category: requirements[i].category,
      requiredQty: requirements[i].requiredQty,
      loadedQty: loadedQty,
      remainingQty: requirements[i].requiredQty - loadedQty,
      complete: loadedQty >= requirements[i].requiredQty
    });
  }

  return status;
}function isRentalReady(agreementNumber) {

  const status = getRequirementStatus(agreementNumber);

  for (let i = 0; i < status.length; i++) {
    if (!status[i].complete) {
      return false;
    }
  }

  return true;

}function testRequirementStatus() {

  const result = getRequirementStatus("BW-TEST-0001");

  Logger.log(JSON.stringify(result, null, 2));

}
