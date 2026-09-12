import { useEffect, useMemo, useState } from "react";
import { getAllOrdersAdmin } from "../api/orders.api";
import OrdersTable from "../components/ui/orders/ordersTable";
import ModelOrderDetails from "../components/ui/orders/ModelOrderDetails";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrdersAdmin();
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const statusMatch =
        statusFilter === "All" || order.status === statusFilter;

      const paymentMatch =
        paymentFilter === "All" || order.payment === paymentFilter;

      return statusMatch && paymentMatch;
    });
  }, [orders, statusFilter, paymentFilter]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6 md:p-8">

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-brand-500 ">
          Orders
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your customer orders
        </p>
      </div>
      <div className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="min-w-[190px]">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Order Status
              </label>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-lg border  border-gray-200 bg-white px-4 py-2.5 text-m text-gray-700 outline-none transition"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

           
            <div className="min-w-[190px]">
              <label className="mb-2 block text-m font-medium text-gray-700">
                Payment Method
              </label>

              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-m text-gray-700 outline-none transition"
              >
                <option value="All">All Payments</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
              </select>
            </div>

          </div>

          {/* Result Count */}
          <div className="flex items-center gap-2 text-m">
            <span className="text-gray-500">
              Showing
            </span>

            <span className="font-semibold text-gray-900">
              {filteredOrders.length}
            </span>

            <span className="text-gray-500">
              orders
            </span>
          </div>

        </div>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">
          <OrdersTable
            orders={filteredOrders}
            onViewDetails={setSelectedOrder}
          />
        </div>

        {filteredOrders.length === 0 && (
          <div className="border-t border-gray-100 py-16 text-center">
            <p className="text-m text-gray-500">
              No orders found
            </p>
          </div>
        )}

      </div>

      {/* Modal */}
      {selectedOrder && (
        <ModelOrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

    </div>
  );
};

export default OrdersPage;