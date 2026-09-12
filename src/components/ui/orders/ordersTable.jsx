import { Package, SearchX } from "lucide-react";
import OrdersTableHeader from "./OrdersTableHeader";
import OrdersTableRow from "./OrdersTableRow";

const OrdersTable = ({ orders = [], loading = false, onViewDetails, searchQuery = "", onClearSearch }) => {
  return (
    <table className="w-full min-w-[900px] text-left">
      <OrdersTableHeader />

      <tbody className="divide-y divide-gray-100 dark:divide-[#242B3F]/40">
        {loading ? (
          /* Loading Skeleton */
          Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx} className="animate-pulse">
              <td className="px-6 py-4">
                <div className="h-4 w-20 rounded bg-gray-200/70 dark:bg-[#161B26]" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gray-200/70 dark:bg-[#161B26] shrink-0" />
                  <div className="space-y-1.5">
                    <div className="h-3.5 w-24 rounded bg-gray-200/70 dark:bg-[#161B26]" />
                    <div className="h-2.5 w-32 rounded bg-gray-200/40 dark:bg-[#161B26]/60" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="h-3.5 w-20 rounded bg-gray-200/70 dark:bg-[#161B26]" />
              </td>
              <td className="px-6 py-4">
                <div className="h-6 w-20 rounded-full bg-gray-200/70 dark:bg-[#161B26]" />
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="h-3.5 w-14 rounded bg-gray-200/70 dark:bg-[#161B26]" />
                  <div className="h-2.5 w-10 rounded bg-gray-200/40 dark:bg-[#161B26]/60" />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 w-24 rounded bg-gray-200/70 dark:bg-[#161B26]" />
              </td>
              <td className="px-6 py-4">
                <div className="h-8 w-16 rounded-xl bg-gray-200/70 dark:bg-[#161B26]" />
              </td>
            </tr>
          ))
        ) : orders.length === 0 ? (
          /* Empty State */
          <tr>
            <td colSpan={7} className="px-6 py-16 text-center">
              <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
                <div className="rounded-2xl bg-[#FFEFDD] dark:bg-[#161B26] p-4 text-[#A36037] mb-3">
                  {searchQuery ? <SearchX size={32} /> : <Package size={32} />}
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  {searchQuery ? "No matching orders found" : "No orders recorded yet"}
                </h4>
                <p className="mt-1 text-xs text-gray-400 dark:text-[#8E9BAE]">
                  {searchQuery
                    ? `No orders matched "${searchQuery}". Try a different keyword.`
                    : "When customers place orders, they will appear here in real-time."}
                </p>
                {searchQuery && onClearSearch && (
                  <button
                    type="button"
                    onClick={onClearSearch}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-[#A36037] hover:bg-[#8F4F28] text-white transition cursor-pointer"
                  >
                    Clear Search Filter
                  </button>
                )}
              </div>
            </td>
          </tr>
        ) : (
          /* Order Rows */
          orders.map((order) => (
            <OrdersTableRow
              key={order._id || order.id}
              order={order}
              onViewDetails={onViewDetails}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default OrdersTable;
