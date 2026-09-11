import { useEffect, useState, useMemo } from 'react';
import {Users as UsersIcon, UserCheck, ShieldCheck, CheckCircle2, UserPlus, Search, X, ChevronDown,} from 'lucide-react';
import toast from 'react-hot-toast';

import { getUserAll, deleteUser } from '../api/users.api';
import { patchChangeRole } from '../api/auth.api';

import UserStatCard from '../components/ui/user/UserStatCard';
import AddUserCollapse from '../components/ui/user/AddUserCollapse';
import UserTable from '../components/ui/user/UserTable';
import EditUserModal from '../components/ui/user/EditUserModal';
import DeleteUserModal from '../components/ui/user/DeleteUserModal';
import bannerBg from '../assets/images/users-banner-bg.jpg';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Active modals state
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [togglingUserId, setTogglingUserId] = useState(null);

  // Fetch all users
  const refreshUsers = async () => {
    try {
      setLoading(true);
      const res = await getUserAll();
      const list = res.data?.users || [];
      setUsers(list);
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to fetch users list';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  // Compute stats dynamically
  const stats = useMemo(() => {
    const total = users.length;
    const admins = users.filter((u) => u.role === 'admin').length;
    const customers = users.filter((u) => u.role === 'customer').length;
    const verified = users.filter((u) => u.isVerified).length;
    return { total, admins, customers, verified };
  }, [users]);

  // Filter users by search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    const q = searchQuery.toLowerCase().trim();
    return users.filter((u) => {
      const name = (u.username || '').toLowerCase();
      const email = (u.email || '').toLowerCase();
      const phone = (u.phone || '').toLowerCase();
      return name.includes(q) || email.includes(q) || phone.includes(q);
    });
  }, [users, searchQuery]);

  // Toggle role handler
  const handleToggleRole = async (user) => {
    const newRole = user.role === 'admin' ? 'customer' : 'admin';
    try {
      setTogglingUserId(user._id);
      await patchChangeRole({ userId: user._id, role: newRole });
      toast.success(
        `Role changed to ${newRole} for ${user.username || 'user'}`
      );
      setUsers((prev) =>
        prev.map((u) => (u._id === user._id ? { ...u, role: newRole } : u))
      );
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to change user role';
      toast.error(msg);
    } finally {
      setTogglingUserId(null);
    }
  };

  // Delete user confirmation handler
  const handleConfirmDelete = async () => {
    if (!deletingUser) return;
    try {
      setIsDeleting(true);
      await deleteUser(deletingUser._id);
      toast.success(
        `User ${deletingUser.username || ''} deleted successfully`
      );
      setUsers((prev) => prev.filter((u) => u._id !== deletingUser._id));
      setDeletingUser(null);
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.userMessage ||
        'Failed to delete user';
      toast.error(msg);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview & Search Card Header */}
      <div
        className="relative overflow-hidden rounded-2xl border-0 shadow-sm bg-cover bg-center bg-no-repeat p-6 sm:px-8 sm:py-6"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[12px] font-semibold tracking-wider text-[#A05A32] uppercase">
              USER MANAGEMENT
            </p>
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#592309] mt-0.5 tracking-tight">
              Manage Users
            </h1>
          </div>

          {/* Search & Add User Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Live Search Input */}
            <div className="relative flex items-center w-full sm:w-72 lg:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Users..."
                className="w-full h-11 sm:h-12 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md pl-11 pr-10 text-sm text-white placeholder-white/60 outline-none transition focus:border-white/50 focus:bg-white/15 focus:ring-1 focus:ring-white/30"
              />
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none z-10"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10 p-1"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Add User Toggle Button */}
            <button
              type="button"
              onClick={() => setIsAddOpen((prev) => !prev)}
              className="flex items-center justify-center gap-2.5 px-5 h-11 sm:h-12 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-sm font-medium text-white shadow-sm transition active:scale-95 shrink-0 cursor-pointer"
            >
              <UserPlus size={17} className="text-white/90" />
              <span>Add User</span>
              <ChevronDown
                size={16}
                className={`text-white/80 transition-transform duration-200 ${
                  isAddOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Add User Collapsible Card */}
      <AddUserCollapse
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onUserAdded={refreshUsers}
      />

      {/* 4 Stat Cards Grid (Figma Design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <UserStatCard
          title="Total Users"
          value={stats.total}
          icon={<UsersIcon size={20} />}
        />
        <UserStatCard
          title="Admins"
          value={stats.admins}
          icon={<ShieldCheck size={20} />}
        />
        <UserStatCard
          title="Customers"
          value={stats.customers}
          icon={<UserCheck size={20} />}
        />
        <UserStatCard
          title="Verified"
          value={stats.verified}
          icon={<CheckCircle2 size={20} />}
        />
      </div>

      {/* Users Table */}
      <UserTable
        users={filteredUsers}
        loading={loading}
        onEdit={(user) => setEditingUser(user)}
        onToggleRole={handleToggleRole}
        onDelete={(user) => setDeletingUser(user)}
        togglingUserId={togglingUserId}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* Modals */}
      {editingUser && (
        <EditUserModal
          key={editingUser._id}
          isOpen={true}
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUserUpdated={refreshUsers}
        />
      )}

      <DeleteUserModal
        isOpen={Boolean(deletingUser)}
        user={deletingUser}
        onClose={() => setDeletingUser(null)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
      />
    </div>
  );
}