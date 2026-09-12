import { Eye } from 'lucide-react';
import OrderStatusBadge from "./OrderStatusBadge";

const OrdersTableRow = ({ order, onViewDetails }) => {
  const shortId = (order._id || order.id || '').slice(-8).toUpperCase();
  const customerName = order.user?.username || order.shippingAddress?.fullName || 'Customer';
  const customerEmail = order.user?.email || '';
  
  // Format date helper
  const formattedDate = order.createdAt
    ? new Date(order.createdAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : order.date || 'N/A';

  // Format currency helper
  const totalAmount = (order.totalPrice ?? order.total ?? 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const paymentMethod = (order.paymentMethod || order.payment || 'Cash').toUpperCase();
  const paymentStatus = (order.paymentStatus || 'pending').toUpperCase();

  return (
    <tr className="group transition-colors hover:bg-[#FFEFDD]/20 dark:hover:bg-[#161B26]/60">
      {/* Order ID */}
      <td className="px-6 py-4">
        <span className="text-sm font-bold text-gray-900 dark:text-white font-mono">
          #{shortId}
        </span>
      </td>

      {/* Customer Info */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#A36037]/10 dark:bg-[#A36037]/20 text-[#A36037] dark:text-[#D9875A] font-bold text-xs flex items-center justify-center shrink-0">
            {customerName.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {customerName}
            </p>
            {customerEmail && (
              <p className="text-xs text-gray-400 dark:text-[#8E9BAE] truncate max-w-[180px]">
                {customerEmail}
              </p>
            )}
          </div>
        </div>
      </td>

      {/* Date */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-xs sm:text-sm text-gray-600 dark:text-[#8E9BAE]">
          {formattedDate}
        </span>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <OrderStatusBadge status={order.status} />
      </td>

      {/* Payment */}
      <td className="px-6 py-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
            {paymentMethod}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${
            paymentStatus === 'PAID'
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-amber-600 dark:text-amber-400'
          }`}>
            {paymentStatus}
          </span>
        </div>
      </td>

      {/* Total */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {totalAmount} EGP
        </span>
      </td>

      {/* Action */}
      <td className="px-6 py-4">
        <button
          type="button"
          onClick={() => onViewDetails(order)}
          className="flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-3.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 transition shadow-xs hover:border-[#A36037] dark:hover:border-[#A36037] hover:text-[#A36037] dark:hover:text-[#D9875A] active:scale-95 cursor-pointer"
        >
          <Eye size={14} />
          <span>View</span>
        </button>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
