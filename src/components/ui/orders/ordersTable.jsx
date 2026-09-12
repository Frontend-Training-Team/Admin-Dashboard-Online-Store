import OrdersTableHeader from "./OrdersTableHeader";
import OrdersTableRow from "./OrdersTableRow";

const OrdersTable = ({ orders, onViewDetails }) => {
  return (
    <table className="w-full min-w-[900px]">

      <OrdersTableHeader />

      <tbody className="divide-y divide-gray-100">
        {orders.map((order) => (
          <OrdersTableRow
            key={order.id}
            order={order}
            onViewDetails={onViewDetails}
          />
        ))}
      </tbody>

    </table>
  );
};

export default OrdersTable;