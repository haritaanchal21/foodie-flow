function getEstimatedDeliveryTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 45); // Assume 45 min delivery
    return now.toISOString();
  }
  
  module.exports = { getEstimatedDeliveryTime };
  