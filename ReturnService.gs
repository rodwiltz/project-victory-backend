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
