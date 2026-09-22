const OrdersTableHeader = () => {
  return (
    <thead className="bg-[#FFEFDD] dark:bg-coal-700 border-b border-brand-100 dark:border-surface-borderDark">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Order
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Customer
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Date
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Status
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Payment
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Total
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-content-muted">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
