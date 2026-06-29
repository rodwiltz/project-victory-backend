function doGet() {
  return HtmlService
    .createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Big W Events");
}

function doPost(e) {
  try {
    const request = JSON.parse(e.postData.contents);
    const action = request.action;

    let result;

    if (action === "addItemToCart") {
    result = addItemToRentalCart(request);
    }
    else 

    if (action === "createRental") {
      result = createRental(request);
      }
    else 

    if (action === "getRentalCart") {
   result = getRentalCart(request.cartId);
    }

    if (action === "checkoutRental") {
      result = checkoutRental(request);
    }
    else
    if (action === "returnItem") {
      result = processReturnItem(request);
    } else if (action === "generateAgreement") {
      result = generateAgreementNumber();
    } else {
      throw new Error("Unknown action: " + action);
    }

    return jsonResponse({
      success: true,
      data: result
    });

  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.message
    });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
