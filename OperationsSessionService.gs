/**
 * OperationsSessionService
 *
 * Shared backend session payload for warehouse operations.
 * The UI should render this object, not calculate business rules.
 */

const OperationsSessionService = {
  getSession: function (agreementNumber, mode) {
    if (!agreementNumber) {
      throw new Error("Agreement number is required.");
    }

    mode = String(mode || "CHECKOUT").toUpperCase();

    const operationsStatus = getOperationsStatus(agreementNumber, mode);
    const requirements = getRentalRequirements(agreementNumber);

    const cartId = requirements.length > 0 ? requirements[0].cartId : "";
    const cart = cartId ? getRentalCart(cartId) : [];

    const categories = this.buildCategories_(operationsStatus.categories);
    const totals = this.buildTotals_(categories);

    return {
      session: {
        agreementNumber: agreementNumber,
        cartId: cartId,
        mode: mode,
        complete: operationsStatus.complete
      },
      totals: totals,
      categories: categories,
      cart: cart,
      lastScan: null,
      messages: [],
      timestamp: new Date()
    };
  },

  buildCategories_: function (statusCategories) {
    return statusCategories.map(function (item) {
      const required = Number(item.requiredQty || 0);
      const completed = Number(item.completedQty || 0);
      const remaining = Number(item.remainingQty || 0);

      return {
        category: item.category,
        required: required,
        completed: completed,
        remaining: remaining,
        complete: item.complete,
        percentComplete: required === 0
          ? 100
          : Math.round((completed / required) * 100)
      };
    });
  },

  buildTotals_: function (categories) {
    const totals = categories.reduce(function (acc, item) {
      acc.required += item.required;
      acc.completed += item.completed;
      acc.remaining += item.remaining;
      return acc;
    }, {
      required: 0,
      completed: 0,
      remaining: 0
    });

    totals.percentComplete = totals.required === 0
      ? 100
      : Math.round((totals.completed / totals.required) * 100);

    return totals;
  }
};

function testOperationsSessionService() {
  const result = OperationsSessionService.getSession("BW-TEST-0001", "CHECKOUT");
  Logger.log(JSON.stringify(result, null, 2));
}
