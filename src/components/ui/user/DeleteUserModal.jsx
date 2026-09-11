import { useEffect } from 'react';
import { Trash2, AlertTriangle, Loader2, X } from 'lucide-react';

function DeleteUserModal({ isOpen, user, onClose, onConfirm, loading }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-[#242B3F] bg-white dark:bg-[#1E2435] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header */}
        <div className="flex items-center justify-between">
          <div className="rounded-2xl bg-rose-100 dark:bg-rose-950/40 p-3 text-rose-500">
            <AlertTriangle size={24} />
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl p-2 text-gray-400 dark:text-[#8E9BAE] hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161B26] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Delete User Account
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-[#8E9BAE] leading-relaxed">
            Are you sure you want to permanently delete user{' '}
            <strong className="font-semibold text-gray-900 dark:text-white">
              {user.username || 'this user'}
            </strong>{' '}
            (<span className="text-gray-700 dark:text-slate-300">{user.email}</span>)?
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 dark:border-[#242B3F] pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-[#242B3F] text-sm font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#161B26] transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60 active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Deleting...</span>
              </>
            ) : (
              <>
                <Trash2 size={16} />
                <span>Delete User</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserModal;
