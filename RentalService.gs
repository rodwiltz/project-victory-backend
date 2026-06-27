function createRental(rentalData) {
  rentalData = rentalData || {};

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Rental Orders");

  if (!sheet) {
    throw new Error('Sheet "Rental Orders" not found.');
  }

  const agreement = generateAgreementNumber().agreementNumber;
  const sessionId = "RENT-" + Utilities.getUuid().slice(0, 8).toUpperCase();

  sheet.appendRow([
    agreement,
    rentalData.customerName || "",
    rentalData.phone || "",
    new Date(),
    rentalData.expectedReturn || "",
    "Open",
    sessionId
  ]);

  return {
    agreementNumber: agreement,
    sessionId: sessionId,
    status: "Open"
  };
}
