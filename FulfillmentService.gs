function completeFulfillment(agreementNumber) {
  const status = getRequirementStatus(agreementNumber);

  for (let i = 0; i < status.length; i++) {
    if (!status[i].complete) {
      return {
  success: false,
  readyToCommit: false,
  message:
    status[i].category +
    " still has " +
    status[i].remainingQty +
    " item(s) to load."
};
    }
  }

  return {
  success: true,
  readyToCommit: true,
  agreementNumber: agreementNumber,
  requirements: status,
  message: "Rental is ready to be committed."
};
}function testCompleteFulfillment() {

  const result = completeFulfillment("TEST-001");

  Logger.log(result);

}
function isRentalReady(agreementNumber) {
  const requirements = getRequirementStatus(agreementNumber);

  for (let i = 0; i < requirements.length; i++) {
    if (!requirements[i].complete) {
      return {
        ready: false,
        reason:
          "Missing " +
          requirements[i].remainingQty +
          " " +
          requirements[i].category
      };
    }
  }

  return {
    ready: true,
    reason: "Ready for checkout."
  };
}

function testRentalReady() {
  const result = isRentalReady("BW-TEST-0001");
  Logger.log(result);
}
function checkoutRental(agreementNumber) {
  const readiness = isRentalReady(agreementNumber);

  if (!readiness.ready) {
    return {
      success: false,
      message: readiness.reason
    };
  }

  const requirements = getRentalRequirements(agreementNumber);

  if (requirements.length === 0) {
    return {
      success: false,
      message: "No rental requirements found."
    };
  }

  const cartId = requirements[0].cartId;
  const cart = getRentalCart(cartId);

  for (let i = 0; i < cart.length; i++) {
    const itemId = cart[i].itemId;

    if (itemId && itemId.indexOf("BULK-") !== 0) {
      updateInventoryStatus(
        itemId,
        "Checked Out",
        agreementNumber,
        "Customer"
      );
    }
  }

  const checkoutSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Checkouts");

  checkoutSheet.appendRow([
  new Date(),          // Timestamp
  agreementNumber,     // Agreement #
  cartId,              // Cart ID
  "Checked Out",       // Status
  "",                  // User
  ""                   // Notes
]);

  return {
    success: true,
    message: agreementNumber + " checked out successfully."
  };
}
function testCheckoutRental() {

  const result = checkoutRental("BW-TEST-0001");

  Logger.log(result);

}
function getOperationsStatus(agreementNumber, mode) {
  mode = mode || "CHECKOUT";

  const status = getRequirementStatus(agreementNumber);

  const categories = [];
  let allComplete = true;

  for (let i = 0; i < status.length; i++) {
    const requiredQty = status[i].requiredQty;
    const completedQty = status[i].loadedQty;
    const remainingQty = status[i].remainingQty;
    const complete = status[i].complete;

    if (!complete) {
      allComplete = false;
    }

    categories.push({
      category: status[i].category,
      requiredQty: requiredQty,
      completedQty: completedQty,
      remainingQty: remainingQty,
      complete: complete
    });
  }

  return {
    agreementNumber: agreementNumber,
    mode: mode,
    categories: categories,
    complete: allComplete
  };
}
function testOperationsStatus() {
  const result = getOperationsStatus("BW-TEST-0001", "RETURN");
  Logger.log(JSON.stringify(result, null, 2));
}
