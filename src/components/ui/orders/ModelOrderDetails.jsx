const ModelOrderDetails = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div>
      <div>
        <h2>Order Details</h2>

        <button onClick={onClose}>Close</button>

        <p>Order ID: {order.id}</p>
        <p>Customer: {order.customer}</p>
        <p>Date: {order.date}</p>
        <p>Status: {order.status}</p>
        <p>Payment: {order.payment}</p>
        <p>Total: {order.total}</p>
      </div>
    </div>
  );
};

export default ModelOrderDetails;