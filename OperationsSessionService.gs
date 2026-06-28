/**
 * OperationsSessionService
 *
 * Creates a shared backend session payload for warehouse operations.
 * This service is the contract between backend business logic and the Operations UI.
 *
 * The UI should render this object.
 * The UI should NOT calculate business rules.
 */
const OperationsSessionService = {
  /**
   * Builds an Operations Session for a rental agreement.
   *
   * @param {string} agreementNumber
   * @param {string} mode - CHECKOUT or RETURN
   * @returns {Object}
   */
  getSession: function (agreementNumber, mode) {
    if (!agreementNumber) {
      throw new Error("Agreement number is required.");
    }

    if (!mode) {
      throw new Error("Operation mode is required.");
    }

    const normalizedMode = String(mode).toUpperCase();

    const agreement = AgreementService.getAgreementByNumber(agreementNumber);
    const requiredItems = RequirementService.getRequirementsByAgreement(agreementNumber);
    const assignedItems = RentalCartService.getCartItemsByAgreement(agreementNumber);

    const categoryProgress = this.buildCategoryProgress_(requiredItems, assignedItems, normalizedMode);
    const totals = this.buildTotals_(categoryProgress);

    return {
      session: {
        mode: normalizedMode,
        agreementNumber: agreementNumber,
        status: agreement ? agreement.status : null,
        isComplete: totals.remaining === 0
      },
      agreement: {
        agreementNumber: agreementNumber,
        customerName: agreement ? agreement.customerName : null,
        checkoutDate: agreement ? agreement.checkoutDate : null,
        expectedReturn: agreement ? agreement.expectedReturn : null
      },
      totals: totals,
      categories: categoryProgress,
      lastScan: null,
      messages: [],
      timestamp: new Date()
    };
  },

  /**
   * Builds progress by category.
   *
   * For Sprint 8 foundation, this compares required quantity to assigned/scanned quantity.
   * Later, CHECKOUT and RETURN can delegate scan status rules separately.
   *
   * @param {Array<Object>} requiredItems
   * @param {Array<Object>} assignedItems
   * @param {string} mode
   * @returns {Array<Object>}
   */
  buildCategoryProgress_: function (requiredItems, assignedItems, mode) {
    const assignedByCategory = {};

    assignedItems.forEach(function (item) {
      const category = item.category || "Uncategorized";

      if (!assignedByCategory[category]) {
        assignedByCategory[category] = 0;
      }

      assignedByCategory[category]++;
    });

    return requiredItems.map(function (requirement) {
      const category = requirement.category;
      const requiredQty = Number(requirement.requiredQty || 0);
      const scannedQty = Number(assignedByCategory[category] || 0);
      const remainingQty = Math.max(requiredQty - scannedQty, 0);

      return {
        category: category,
        required: requiredQty,
        scanned: scannedQty,
        remaining: remainingQty,
        percentComplete: requiredQty === 0 ? 100 : Math.round((scannedQty / requiredQty) * 100),
        mode: mode
      };
    });
  },

  /**
   * Builds total operation progress.
   *
   * @param {Array<Object>} categories
   * @returns {Object}
   */
  buildTotals_: function (categories) {
    const totals = categories.reduce(function (acc, category) {
      acc.required += Number(category.required || 0);
      acc.scanned += Number(category.scanned || 0);
      acc.remaining += Number(category.remaining || 0);
      return acc;
    }, {
      required: 0,
      scanned: 0,
      remaining: 0
    });

    totals.percentComplete = totals.required === 0
      ? 100
      : Math.round((totals.scanned / totals.required) * 100);

    return totals;
  }
};
