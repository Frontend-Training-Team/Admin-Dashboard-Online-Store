const OrdersTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-100 bg-gray-50/70">

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Order
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Customer
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Date
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Status
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Payment
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Total
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          Action
        </th>

      </tr>
    </thead>
  );
};

export default OrdersTableHeader;