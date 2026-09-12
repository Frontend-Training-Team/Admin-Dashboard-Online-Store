import OrderStatusBadge from "./OrderStatusBadge";

const OrdersTableRow = ({ order, onViewDetails }) => {
  return (
    <tr className="group transition-colors hover:bg-gray-50">

      <td className="px-6 py-4">
        <span className="text-sm font-semibold text-gray-900">
          #{order.id}
        </span>
      </td>

      <td className="px-6 py-4">
        <span className="text-sm text-gray-700">
          {order.customer}
        </span>
      </td>

      <td className="px-6 py-4">
        <span className="text-sm text-gray-500">
          {order.date}
        </span>
      </td>

      <td className="px-6 py-4">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-6 py-4">
        <span className="text-sm text-gray-600">
          {order.payment}
        </span>
      </td>

      <td className="px-6 py-4">
        <span className="text-sm font-semibold text-gray-900">
          {order.total}
        </span>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => onViewDetails(order)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-100"
        >
          View
        </button>
      </td>

    </tr>
  );
};

export default OrdersTableRow;