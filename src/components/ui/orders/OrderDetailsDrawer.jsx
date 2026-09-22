import { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, Package, MapPin, Mail, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { patchUpdateOrders } from '../../../api/ordersAdmin.api';
import OrderStatusBadge from './OrderStatusBadge';

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'processing', label: 'Processing' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'returned', label: 'Returned' },
];

function OrderDetailsDrawer({ order, isOpen, onClose, onOrderUpdated }) {
  const [currentStatus, setCurrentStatus] = useState(order?.status || 'pending');
  const [adminNote, setAdminNote] = useState(order?.adminNote || '');
  const [isUpdating, setIsUpdating] = useState(false);

  // Sync state when order prop changes
  useEffect(() => {
    if (order) {
      setCurrentStatus((order.status || 'pending').toLowerCase());
      setAdminNote(order.adminNote || '');
    }
  }, [order]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Format currency helper
  const formatEGP = (amount) => {
    const num = Number(amount) || 0;
    return `${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EGP`;
  };

  // Handle status update
  const handleSaveChanges = async () => {
    try {
      setIsUpdating(true);
      const res = await patchUpdateOrders(order._id, {
        status: currentStatus,
        adminNote: adminNote.trim() || undefined,
      });

      toast.success(`Order updated to "${currentStatus}" successfully!`);
      if (onOrderUpdated) {
        onOrderUpdated(res.data?.order || { ...order, status: currentStatus, adminNote });
      }
      onClose();
    } catch (error) {
      console.error('Failed to update order status:', error);
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to update order status.';
      toast.error(msg);
    } finally {
      setIsUpdating(false);
    }
  };

  const shortId = (order?._id || '').slice(-8).toUpperCase();
  const customerName = order?.user?.username || order?.shippingAddress?.fullName || 'Customer';
  const customerEmail = order?.user?.email || 'No email provided';
  const shippingAddress = order?.shippingAddress
    ? [order.shippingAddress.city, order.shippingAddress.country].filter(Boolean).join(', ') || order.shippingAddress.address
    : 'No address provided';

  const paymentMethodLabel = (order?.paymentMethod || 'cash').toUpperCase();
  const paymentStatus = (order?.paymentStatus || 'pending').toUpperCase();

  return (
    <AnimatePresence>
      {isOpen && order && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[rgba(6,7,9,0.72)] backdrop-blur-md"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-screen max-w-md sm:max-w-lg bg-white dark:bg-coal-600 text-gray-900 dark:text-content-primary 
              shadow-2xl flex flex-col border-l border-gray-100 dark:border-surface-borderDark"
            >

              {/* Top Header */}
              <div className="p-6 border-b border-gray-100 dark:border-surface-borderDark flex items-center justify-between shrink-0">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#A05A32] dark:text-copper-500">
                    ORDER DETAIL
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-content-primary mt-0.5 tracking-tight">
                    #{shortId}
                  </h2>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-2 text-gray-400 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161B26] transition cursor-pointer"
                  title="Close"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {/* Status & Payment Row */}
                <div className="flex items-center justify-between flex-wrap gap-2.5 pb-2">
                  <div className="flex items-center gap-2">
                    <OrderStatusBadge status={order.status} />
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${paymentStatus === 'PAID'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-[rgba(74,222,155,0.10)] dark:text-state-confirmed dark:border-[rgba(74,222,155,0.24)]'
                      : 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-[rgba(245,181,68,0.10)] dark:text-state-warning dark:border-[rgba(245,181,68,0.24)]'
                      }`}>
                      {paymentStatus}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {paymentMethodLabel}
                  </span>
                </div>

                {/* Info Card */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-content-muted mb-2.5">
                    INFO
                  </p>
                  <div className="rounded-2xl bg-gray-50/80 dark:bg-coal-700 border border-gray-100/90 dark:border-[rgba(255,255,255,0.06)] p-4.5 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-content-muted flex items-center gap-2">
                        <Calendar size={15} className="text-[#A05A32] dark:text-copper-500" /> Placed
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-content-primary">
                        {formatDate(order.createdAt)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-content-muted flex items-center gap-2">
                        <User size={15} className="text-[#A05A32] dark:text-copper-500" /> Customer
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-content-primary flex items-center gap-1.5">
                        {customerName}
                        <CheckCircle2 size={15} className="text-emerald-500 inline-block" />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-content-muted flex items-center gap-2">
                        <Mail size={15} className="text-[#A05A32] dark:text-copper-500" /> Email
                      </span>
                      <span className="font-medium text-gray-800 dark:text-gray-300 truncate max-w-[200px]" title={customerEmail}>
                        {customerEmail}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 pt-1 border-t border-gray-200/50 dark:border-[rgba(255,255,255,0.06)]/50">
                      <span className="text-gray-500 dark:text-content-muted flex items-center gap-2 shrink-0">
                        <MapPin size={15} className="text-[#A05A32] dark:text-copper-500" /> Ship to
                      </span>
                      <span className="font-medium text-gray-800 dark:text-gray-300 text-right">
                        {shippingAddress}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Items Section */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-content-muted mb-2.5">
                    ITEMS ({order.items?.length || 0})
                  </p>
                  <div className="space-y-2.5">
                    {order.items && order.items.length > 0 ? (
                      order.items.map((item, index) => (
                        <div
                          key={item._id || index}
                          className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-coal-700 border border-gray-100/90 dark:border-[rgba(255,255,255,0.06)]"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-xl object-cover border border-gray-200/60 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#1E2435] shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-[#1E2435] flex items-center justify-center text-gray-400 shrink-0">
                                <Package size={20} />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 dark:text-content-primary truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-content-muted mt-0.5">
                                × {item.quantity} · {formatEGP(item.price)}
                              </p>
                            </div>
                          </div>

                          <span className="text-sm font-bold text-gray-900 dark:text-content-primary shrink-0">
                            {formatEGP((item.price || 0) * (item.quantity || 1))}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 p-4 text-center">No items recorded in this order.</p>
                    )}
                  </div>
                </div>

                {/* Financials Card */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-content-muted mb-2.5">
                    FINANCIALS
                  </p>
                  <div className="rounded-2xl bg-gray-50/80 dark:bg-coal-700 border border-gray-100/90 dark:border-[rgba(255,255,255,0.06)] p-4.5 space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                      <span>Subtotal</span>
                      <span className="font-semibold">{formatEGP(order.subtotal)}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                      <span>Shipping</span>
                      <span className="font-semibold">{formatEGP(order.shippingFee)}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                      <span>Tax (14%)</span>
                      <span className="font-semibold">{formatEGP(order.tax)}</span>
                    </div>

                    {order.discount > 0 && (
                      <div className="flex items-center justify-between text-rose-500 font-medium">
                        <span>Discount</span>
                        <span>-{formatEGP(order.discount)}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-[rgba(255,255,255,0.06)] text-base font-bold text-gray-900 dark:text-content-primary">
                      <span>Total</span>
                      <span className="text-lg text-[#A05A32] dark:text-[#D9875A]">{formatEGP(order.totalPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Update Status Section */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-content-muted mb-2.5">
                    UPDATE STATUS
                  </p>
                  <div className="rounded-2xl bg-gray-50/80 dark:bg-coal-700 border border-gray-100/90 dark:border-[rgba(255,255,255,0.06)] p-4.5 space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-content-muted mb-1.5">
                        Order Status
                      </label>
                      <select
                        value={currentStatus}
                        onChange={(e) => setCurrentStatus(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#1E2435] px-4 py-2.5 text-sm text-gray-900 dark:text-content-primary outline-none transition focus:border-[#A05A32] dark:focus:border-[#A05A32]"
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-content-muted mb-1.5">
                        Admin Note
                      </label>
                      <textarea
                        rows={3}
                        value={adminNote}
                        onChange={(e) => setAdminNote(e.target.value)}
                        placeholder="Admin note (optional)..."
                        className="w-full rounded-xl border border-gray-200 dark:border-[rgba(255,255,255,0.06)] bg-white 
                    dark:bg-[#1E2435] px-4 py-2.5 text-sm text-gray-900 dark:text-content-primary placeholder-gray-400 
                    dark:placeholder-gray-500 outline-none transition focus:border-[#A05A32] dark:focus:border-[#A05A32] resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleSaveChanges}
                      disabled={isUpdating}
                      className="w-full py-3 rounded-xl bg-[#A36037] hover:bg-[#8F4F28] text-white dark:bg-copper-500 dark:hover:bg-copper-600 dark:text-content-inverse 
                  text-sm font-semibold shadow-sm transition disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isUpdating ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Saving changes...</span>
                        </>
                      ) : (
                        <span>Save changes</span>
                      )}
                    </motion.button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default OrderDetailsDrawer;