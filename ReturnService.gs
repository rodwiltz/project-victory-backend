function returnInventoryItem(itemId) {

  const item = findInventoryItem(itemId);

  if (!item) {
    return {
      success: false,
      message: "Inventory item not found."
    };
  }

  updateInventoryStatus(
    itemId,
    STATUS.AVAILABLE,
    "",
    LOCATION.HOME
  );

  return {
    success: true,
    itemId: itemId,
    message: itemId + " returned successfully."
  };

}
function testReturnInventoryItem() {

  const result = returnInventoryItem("RECT1");

  Logger.log(result);

}
function scanReturnedItem(agreementNumber, itemId) {
  const item = findInventoryItem(itemId);

  if (!item) {
    return {
      success: false,
      message: "Inventory item not found: " + itemId
    };
  }

  updateInventoryStatus(
    itemId,
    STATUS.AVAILABLE,
    "",
    LOCATION.HOME
  );

  const returnsSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Returns");

  returnsSheet.appendRow([
    new Date(),
    agreementNumber,
    itemId,
    STATUS.RETURNED,
    "",
    ""
  ]);

  return {
    success: true,
    itemId: itemId,
    message: itemId + " returned successfully."
  };
}
function testScanReturnedItem() {
  const result = scanReturnedItem("BW-TEST-0001", "RECT2");
  Logger.log(result);
}
function startReturn(agreementNumber) {
  const status = getOperationsStatus(agreementNumber, "RETURN");

  return {
    agreementNumber: agreementNumber,
    mode: "RETURN",
    status: status,
    message: "Return session started for " + agreementNumber
  };
}
function testStartReturn() {
  const result = startReturn("BW-TEST-0001");
  Logger.log(JSON.stringify(result, null, 2));
}
