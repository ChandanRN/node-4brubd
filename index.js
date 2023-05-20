/**
 * OPERATION 1
 * Function to get the user name from the server
 */
const getUserName = () => {
  let name = null;
  setTimeout(() => {
    name = 'Chandan R N';
    console.log(name);
  }, 2000);
};

/**
 * OPERATION 2
 * Function to get the past orders from the server
 */
const getPastOrders = () => {
  let orderDetails = null;
  setTimeout(() => {
    orderDetails = {
      orderId: '101',
      amount: 500,
      discount: 50,
    };
    console.log(orderDetails);
  }, 1000);
};

getPastOrders();
getUserName();
