const OrdersTableHeader = () => {
  return (
    <thead className="bg-[#FFEFDD] dark:bg-coal-700 border-b border-brand-100 dark:border-[#262B34]">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Order
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Customer
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Date
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Status
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Payment
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Total
        </th>
        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-[#8A8378]">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
