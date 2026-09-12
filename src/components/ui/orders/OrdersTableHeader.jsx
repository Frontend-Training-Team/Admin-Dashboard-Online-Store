const OrdersTableHeader = () => {
  return (
    <thead className="bg-[#FFEFDD] dark:bg-[#1E2435] border-b border-brand-100 dark:border-[#242B3F]">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Order
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Customer
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Date
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Status
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Payment
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Total
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#D1D5DB]">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
