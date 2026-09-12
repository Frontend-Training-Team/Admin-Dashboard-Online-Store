import { useEffect, useMemo, useState, useCallback } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { getAllOrdersAdmin } from "../api/ordersAdmin.api";
import OrdersTable from "../components/ui/orders/ordersTable";
import OrderDetailsDrawer from "../components/ui/orders/OrderDetailsDrawer";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);

  // Fetch orders from admin API with pagination & filters
  const fetchOrders = useCallback(
    async (page = 1, status = statusFilter, payment = paymentFilter) => {
      try {
        setLoading(true);
        const params = {
          page,
          limit: 15,
        };

        if (status && status !== "All") {
          params.status = status;
        }
        if (payment && payment !== "All") {
          params.paymentStatus = payment;
        }

        const res = await getAllOrdersAdmin(params);
        const list = res.data?.orders || [];
        setOrders(list);
        setTotalOrders(res.data?.total ?? list.length);
        setTotalPages(res.data?.totalPages ?? 1);
        setCurrentPage(res.data?.currentPage ?? page);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        const msg =
          error.response?.data?.message ||
          error.userMessage ||
          "Failed to fetch orders list";
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    },
    [statusFilter, paymentFilter]
  );

  // Initial load
  useEffect(() => {
    fetchOrders(1, statusFilter, paymentFilter);
  }, []);

  // Handle status filter change
  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    setCurrentPage(1);
    fetchOrders(1, newStatus, paymentFilter);
  };

  // Handle payment filter change
  const handlePaymentChange = (newPayment) => {
    setPaymentFilter(newPayment);
    setCurrentPage(1);
    fetchOrders(1, statusFilter, newPayment);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    fetchOrders(newPage, statusFilter, paymentFilter);
  };

  // Update order in state when edited in drawer
  const handleOrderUpdated = (updatedOrder) => {
    if (!updatedOrder?._id) return;
    setOrders((prev) =>
      prev.map((o) => (o._id === updatedOrder._id ? { ...o, ...updatedOrder } : o))
    );
    if (selectedOrder && selectedOrder._id === updatedOrder._id) {
      setSelectedOrder((prev) => ({ ...prev, ...updatedOrder }));
    }
  };

  // Search filter across current page items (by short ID, full ID, customer username, email, phone)
  const filteredOrders = useMemo(() => {
    if (!searchQuery.trim()) return orders;

    const q = searchQuery.toLowerCase().trim();
    return orders.filter((order) => {
      const shortId = (order._id || "").slice(-8).toLowerCase();
      const fullId = (order._id || "").toLowerCase();
      const customer = (
        order.user?.username ||
        order.shippingAddress?.fullName ||
        ""
      ).toLowerCase();
      const email = (order.user?.email || "").toLowerCase();
      const phone = (order.shippingAddress?.phone || "").toLowerCase();

      return (
        shortId.includes(q) ||
        fullId.includes(q) ||
        customer.includes(q) ||
        email.includes(q) ||
        phone.includes(q)
      );
    });
  }, [orders, searchQuery]);

  // Dynamic pagination numbers window (up to 5 buttons, e.g. 1 2 3 4 5)
  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#A05A32] dark:text-[#AB755D] uppercase">
            ORDER MANAGEMENT
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1 tracking-tight">
            Orders
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-[#8E9BAE]">
            Track customer orders, manage payments, and update fulfillment in real time.
          </p>
        </div>

        {/* Prominent Orders Count Badge (Matches Koda & screenshot) */}
        <div className="self-start sm:self-auto flex items-center px-4 py-2.5 rounded-xl bg-gray-100/90 dark:bg-[#161B26] border border-gray-200 dark:border-[#242B3F] shadow-xs">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            {totalOrders}
          </span>
          <span className="ml-2.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-[#8E9BAE]">
            total orders
          </span>
        </div>
      </div>

      {/* Search & Filters Card */}
      <div className="rounded-2xl border border-gray-100 dark:border-0 bg-white dark:bg-[#1E2435] p-5 shadow-xs transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Live Search Input */}
          <div className="relative flex items-center w-full lg:max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ID, customer, email..."
              className="w-full h-11 rounded-xl border border-gray-200 dark:border-[#242B3F] bg-gray-50/70 dark:bg-[#161B26] pl-10 pr-9 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder:text-[#5E6C84] outline-none transition focus:border-[#A05A32] dark:focus:border-[#A05A32] focus:bg-white dark:focus:bg-[#161B26]"
            />
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                title="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition p-1 cursor-pointer"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter */}
            <div className="min-w-[150px] flex-1 sm:flex-initial">
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full h-11 rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-3.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 outline-none transition focus:border-[#A05A32] dark:focus:border-[#A05A32]"
              >
                <option value="All">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
                <option value="returned">Returned</option>
              </select>
            </div>

            {/* Payment Status Filter */}
            <div className="min-w-[150px] flex-1 sm:flex-initial">
              <select
                value={paymentFilter}
                onChange={(e) => handlePaymentChange(e.target.value)}
                className="w-full h-11 rounded-xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#161B26] px-3.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 outline-none transition focus:border-[#A05A32] dark:focus:border-[#A05A32]"
              >
                <option value="All">All Payments</option>
                <option value="pending">Payment: Pending</option>
                <option value="paid">Payment: Paid</option>
              </select>
            </div>

            {/* In-view count badge */}
            <div className="h-11 px-4 rounded-xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/70 dark:border-[#242B3F] flex items-center text-xs font-medium text-gray-500 dark:text-[#8E9BAE] shrink-0">
              <span>
                Showing <strong className="text-gray-900 dark:text-white font-bold">{filteredOrders.length}</strong> on this page
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Orders Table Container */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-0 bg-white dark:bg-[#1E2435] shadow-xs">
        <div className="overflow-x-auto">
          <OrdersTable
            orders={filteredOrders}
            loading={loading}
            onViewDetails={(order) => setSelectedOrder(order)}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery("")}
          />
        </div>

        {/* Pagination Footer (Matches Koda & uploaded screenshot) */}
        <div className="border-t border-gray-100 dark:border-[#242B3F]/50 bg-gray-50/50 dark:bg-[#161B26]/60 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Page 1 of 13 */}
          <div className="text-xs sm:text-sm text-gray-500 dark:text-[#8E9BAE]">
            Page <strong className="font-semibold text-gray-900 dark:text-white">{currentPage}</strong> of{" "}
            <strong className="font-semibold text-gray-900 dark:text-white">{totalPages}</strong>
          </div>

          {/* Right: < 1 2 3 4 5 > */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {getPageNumbers().map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => handlePageChange(p)}
                disabled={loading}
                className={`h-8 min-w-[32px] px-2.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  p === currentPage
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950 shadow-xs"
                    : "text-gray-600 dark:text-[#8E9BAE] hover:bg-gray-200/60 dark:hover:text-white dark:hover:bg-white/5"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || loading}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Order Details Slide-over Drawer */}
      <OrderDetailsDrawer
        order={selectedOrder}
        isOpen={Boolean(selectedOrder)}
        onClose={() => setSelectedOrder(null)}
        onOrderUpdated={handleOrderUpdated}
      />

    </div>
  );
};

export default OrdersPage;
