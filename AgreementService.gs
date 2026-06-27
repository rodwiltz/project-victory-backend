function generateAgreementNumber() {
  const prefix = getSetting("Agreement Prefix");
  const year = getSetting("Agreement Year");
  const nextNumber = Number(getSetting("Next Agreement Number"));

  const paddedNumber = String(nextNumber).padStart(4, "0");
  const agreementNumber = prefix + "-" + year + "-" + paddedNumber;

  updateSetting("Next Agreement Number", nextNumber + 1);

  return {
    agreementNumber: agreementNumber
  };
}
