function findInventoryItem(itemId) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Inventory");

  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const itemCol = headers.indexOf("Item ID");

  for (let i = 1; i < data.length; i++) {
    if (data[i][itemCol] == itemId) {
      return {
        row: i + 1,
        values: data[i]
      };
    }
  }

  return null;
}

function isInventoryAvailable(itemId) {
  const item = findInventoryItem(itemId);

  if (!item) {
    return false;
  }

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Inventory");

  const headers = sheet.getDataRange().getValues()[0];
  const statusColumn = headers.indexOf("Status");

  return item.values[statusColumn] === "Available";
}

function updateInventoryStatus(itemId, status, agreementNumber, location) {
  const item = findInventoryItem(itemId);

  if (!item) {
    throw new Error("Inventory item not found: " + itemId);
  }

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Inventory");

  const headers = sheet.getDataRange().getValues()[0];

  const statusCol = headers.indexOf("Status") + 1;
  const agreementCol = headers.indexOf("Agreement #") + 1;
  const locationCol = headers.indexOf("Location") + 1;

  sheet.getRange(item.row, statusCol).setValue(status);
  sheet.getRange(item.row, agreementCol).setValue(agreementNumber);
  sheet.getRange(item.row, locationCol).setValue(location);

  return true;
}
function getInventoryCategory(itemId) {
  const item = findInventoryItem(itemId);

  if (!item) {
    return null;
  }

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Inventory");

  const headers = sheet.getDataRange().getValues()[0];
  const categoryCol = headers.indexOf("Category");

  if (categoryCol === -1) {
    return null;
  }

  return item.values[categoryCol];
}
function updateInventoryStatus(itemId, status, agreementNumber, location) {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Inventory");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === itemId) {

      // Status
      sheet.getRange(i + 1, 5).setValue(status);

      // Current Agreement
      sheet.getRange(i + 1, 7).setValue(agreementNumber || "");

      // Location
      sheet.getRange(i + 1, 6).setValue(location || "");

      return {
        success: true,
        itemId: itemId,
        status: status
      };
    }
  }

  return {
    success: false,
    message: "Item not found: " + itemId
  };
}
function testUpdateInventoryStatus() {

  const result = updateInventoryStatus(
    "RECT1",
    "Checked Out",
    "BW-TEST-0001",
    "Customer"
  );

  Logger.log(result);

}
