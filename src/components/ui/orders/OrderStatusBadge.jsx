const statusConfig = {
  pending: {
    label: "Pending",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-[rgba(245,181,68,0.10)] dark:text-[#F5B544] dark:border-[rgba(245,181,68,0.24)]",
    dotClass: "bg-amber-500 dark:bg-[#F5B544]",
  },
  confirmed: {
    label: "Confirmed",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-[rgba(63,211,176,0.10)] dark:text-[#3FD3B0] dark:border-[rgba(63,211,176,0.24)]",
    dotClass: "bg-blue-500 dark:bg-[#3FD3B0]",
  },
  processing: {
    label: "Processing",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-[rgba(95,168,245,0.10)] dark:text-[#5FA8F5] dark:border-[rgba(95,168,245,0.24)]",
    dotClass: "bg-purple-500 dark:bg-[#5FA8F5]",
  },
  shipped: {
    label: "Shipped",
    badgeClass: "bg-cyan-50 text-cyan-700 border-cyan-200/60 dark:bg-[rgba(167,139,250,0.10)] dark:text-[#A78BFA] dark:border-[rgba(167,139,250,0.24)]",
    dotClass: "bg-cyan-500 dark:bg-[#A78BFA]",
  },
  delivered: {
    label: "Delivered",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-[rgba(74,222,155,0.10)] dark:text-[#4ADE9B] dark:border-[rgba(74,222,155,0.24)]",
    dotClass: "bg-emerald-500 dark:bg-[#4ADE9B]",
  },
  cancelled: {
    label: "Cancelled",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-[rgba(248,113,113,0.10)] dark:text-[#F87171] dark:border-[rgba(248,113,113,0.24)]",
    dotClass: "bg-rose-500 dark:bg-[#F87171]",
  },
  returned: {
    label: "Returned",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-[rgba(156,163,175,0.10)] dark:text-[#9CA3AF] dark:border-[rgba(156,163,175,0.22)]",
    dotClass: "bg-gray-400 dark:bg-[#9CA3AF]",
  },
};

const OrderStatusBadge = ({ status }) => {
  const normalized = (status || "").toLowerCase().trim();
  const config = statusConfig[normalized] || {
    label: status || "Unknown",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-[rgba(156,163,175,0.10)] dark:text-[#9CA3AF] dark:border-[rgba(156,163,175,0.22)]",
    dotClass: "bg-gray-400 dark:bg-[#9CA3AF]",
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
