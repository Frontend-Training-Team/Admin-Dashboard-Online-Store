const statusConfig = {
  pending: {
    label: "Pending",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/40",
    dotClass: "bg-amber-500",
  },
  confirmed: {
    label: "Confirmed",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/40",
    dotClass: "bg-blue-500",
  },
  processing: {
    label: "Processing",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900/40",
    dotClass: "bg-purple-500",
  },
  shipped: {
    label: "Shipped",
    badgeClass: "bg-cyan-50 text-cyan-700 border-cyan-200/60 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-900/40",
    dotClass: "bg-cyan-500",
  },
  delivered: {
    label: "Delivered",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/40",
    dotClass: "bg-emerald-500",
  },
  cancelled: {
    label: "Cancelled",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/40",
    dotClass: "bg-rose-500",
  },
  returned: {
    label: "Returned",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/60 dark:text-gray-300 dark:border-gray-700/60",
    dotClass: "bg-gray-400",
  },
};

const OrderStatusBadge = ({ status }) => {
  const normalized = (status || "").toLowerCase().trim();
  const config = statusConfig[normalized] || {
    label: status || "Unknown",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/60 dark:text-gray-300 dark:border-gray-700/60",
    dotClass: "bg-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.badgeClass}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${config.dotClass}`} />
      <span>{config.label}</span>
    </span>
  );
};

export default OrderStatusBadge;
