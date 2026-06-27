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
