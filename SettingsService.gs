function getSetting(settingName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings");
  const values = sheet.getDataRange().getValues();

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === settingName) {
      return values[i][1];
    }
  }

  throw new Error("Setting not found: " + settingName);
}

function updateSetting(settingName, newValue) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings");
  const values = sheet.getDataRange().getValues();

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === settingName) {
      sheet.getRange(i + 1, 2).setValue(newValue);
      return;
    }
  }

  throw new Error("Setting not found: " + settingName);
}
const STATUS = {
  AVAILABLE: "Available",
  CHECKED_OUT: "Checked Out",
  RETURNED: "Returned",
  REPAIR: "Repair",
  LOST: "Lost"
};

const LOCATION = {
  HOME: "Home",
  CUSTOMER: "Customer"
};
