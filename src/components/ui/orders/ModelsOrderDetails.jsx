const ModelOrderDetails = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Order Details
          </h2>

          <button onClick={onClose}>
            X
          </button>
        </div>

        <div className="space-y-3">
          <p>
            <strong>Order Number:</strong> {order.id}
          </p>

          <p>
            <strong>Customer:</strong> {order.customer}
          </p>

          <p>
            <strong>Date:</strong> {order.date}
          </p>

          <p>
            <strong>Status:</strong> {order.status}
          </p>

          <p>
            <strong>Payment:</strong> {order.payment}
          </p>

          <p>
            <strong>Total:</strong> {order.total}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-200 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModelOrderDetails;