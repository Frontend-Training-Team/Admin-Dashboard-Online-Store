import { useState } from 'react';
import { SquarePen, UserShield, Trash2, Check, X, Loader2 } from 'lucide-react';
import defaultAvatar from '../../../assets/images/Guest.jpg';

function UserRow({ user, onEdit, onToggleRole, onDelete, isToggling }) {
  const [imgError, setImgError] = useState(false);

  const avatarSrc = imgError || !user?.avatar ? defaultAvatar : user.avatar;
  const isAdmin = user?.role === 'admin';

  return (
    <tr className="transition-colors hover:bg-[#FFEFDD]/20 dark:hover:bg-[#22262F]">
      {/* User Info */}
      <td className="px-6 py-3.5 sm:py-4">
        <div className="flex items-center gap-3.5">
          <img
            src={avatarSrc}
            alt={user.username || 'User'}
            onError={() => setImgError(true)}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover bg-brand-100 dark:bg-[#181B22] dark:brightness-[0.92] dark:border dark:border-[rgba(255,255,255,0.06)] shrink-0"
          />
          <div className="min-w-0">
            <p className="font-semibold text-sm sm:text-[15px] text-gray-900 dark:text-[#F5F1EA] truncate">
              {user.username || 'User'}
            </p>
            <p className="text-xs text-gray-400 dark:text-[#8A8378] truncate mt-0.5">
              {user.email || 'username@email.com'}
            </p>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="px-6 py-3.5 sm:py-4">
        <span
          className={`font-semibold text-sm ${isAdmin
              ? 'text-[#F06A5D] dark:text-[#F87171]'
              : 'text-gray-900 dark:text-white'
            }`}
        >
          {isAdmin ? 'Admin' : 'Customer'}
        </span>
      </td>

      {/* Verified Status */}
      <td className="px-6 py-3.5 sm:py-4">
        {user.isVerified ? (
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-[#4ADE9B]">
            <Check size={16} className="text-emerald-500 dark:text-[#4ADE9B] stroke-[2.5]" />
            <span>Verified</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-medium text-[#F06A5D] dark:text-[#F87171]">
            <X size={16} className="text-[#F06A5D] dark:text-[#E54335] stroke-[2.5]" />
            <span>Not Verified</span>
          </div>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-3.5 sm:py-4">
        <div className="flex items-center gap-2.5">
          {/* Edit (Blue Outlined) */}
          <button
            type="button"
            onClick={() => onEdit(user)}
            title="Edit User"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-blue-400/80 dark:border-[rgba(95,168,245,0.24)] bg-white dark:bg-[rgba(95,168,245,0.10)] text-blue-500 dark:text-[#5FA8F5] hover:bg-blue-50/70 dark:hover:bg-[rgba(95,168,245,0.20)] flex items-center justify-center transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <SquarePen size={18} />
          </button>

          {/* Toggle Role (Green Outlined) */}
          <button
            type="button"
            onClick={() => onToggleRole(user)}
            disabled={isToggling}
            title={`Switch role to ${isAdmin ? 'Customer' : 'Admin'}`}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-emerald-400/80 dark:border-[rgba(74,222,155,0.24)] bg-white dark:bg-[rgba(74,222,155,0.10)] text-emerald-500 dark:text-[#4ADE9B] hover:bg-emerald-50/70 dark:hover:bg-[rgba(74,222,155,0.20)] flex items-center justify-center transition shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {isToggling ? (
              <Loader2 size={16} className="animate-spin text-emerald-500" />
            ) : (
              <UserShield size={18} />
            )}
          </button>

          {/* Delete (Red Outlined) */}
          <button
            type="button"
            onClick={() => onDelete(user)}
            title="Delete User"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-rose-300 dark:border-[rgba(248,113,113,0.24)] bg-white dark:bg-[rgba(248,113,113,0.10)] text-[#F06A5D] dark:text-[#F87171] hover:bg-rose-50/70 dark:hover:bg-[rgba(248,113,113,0.20)] flex items-center justify-center transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
