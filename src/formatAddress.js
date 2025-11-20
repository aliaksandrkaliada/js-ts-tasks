/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
function formatAddress() {
  return function (address) {
    const { street = '', house = '', apartment = '', city = '', postalCode = '', country = '' } = address;
    return `${street}, ${house}, ${apartment}, ${city}, ${postalCode}, ${country}`;
  };
};
function formatAddressWithOrder(order) {
  return function (address) {
    return order
    .map(key => address[key] || '')
    .join(', ');
  };
};
module.exports = {
  formatAddress,
  formatAddressWithOrder
};

