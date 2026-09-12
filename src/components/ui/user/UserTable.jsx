import UserRow from './UserRow';
import { Users, SearchX } from 'lucide-react';

function UserTable({ users, loading, onEdit, onToggleRole, onDelete, togglingUserId, searchQuery, onClearSearch,}) {
  
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-0 bg-white dark:bg-gray-900 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          {/* Table Header matching Figma (#FFEFDD in light, #1E2435 in dark) */}
          <thead className="bg-[#FFEFDD] dark:bg-gray-900">
            <tr>
              <th className="px-6 py-4 text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-[#D1D5DB]">
                User
              </th>
              <th className="px-6 py-4 text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-[#D1D5DB]">
                Role
              </th>
              <th className="px-6 py-4 text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-[#D1D5DB]">
                Verified
              </th>
              <th className="px-6 py-4 text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-[#D1D5DB]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-[#242B3F]/40">
            {/* Loading Skeleton */}
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gray-200/70 dark:bg-[#161B26]" />
                      <div className="space-y-2">
                        <div className="h-4 w-28 rounded bg-gray-200/70 dark:bg-[#161B26]" />
                        <div className="h-3 w-40 rounded bg-gray-200/40 dark:bg-[#161B26]/60" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 w-16 rounded bg-gray-200/70 dark:bg-[#161B26]" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 w-20 rounded bg-gray-200/70 dark:bg-[#161B26]" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-[#161B26]" />
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-[#161B26]" />
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-[#161B26]" />
                    </div>
                  </td>
                </tr>
              ))
            ) : users.length === 0 ? (
              /* Empty State */
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center">
                  <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
                    <div className="rounded-2xl bg-[#FFEFDD] dark:bg-[#161B26] p-4 text-[#A36037] mb-3">
                      {searchQuery ? <SearchX size={32} /> : <Users size={32} />}
                    </div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      {searchQuery ? 'No matching users found' : 'No users available'}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400 dark:text-[#8E9BAE]">
                      {searchQuery
                        ? `No users matched "${searchQuery}". Try searching with a different keyword.`
                        : 'There are currently no users in the database.'}
                    </p>
                    {searchQuery && (
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
              /* Rows */
              users.map((user) => (
                <UserRow
                  key={user._id}
                  user={user}
                  onEdit={onEdit}
                  onToggleRole={onToggleRole}
                  onDelete={onDelete}
                  isToggling={togglingUserId === user._id}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      {!loading && users.length > 0 && (
        <div className="border-t border-gray-100 dark:border-brand-900/40 bg-[#FFEFDD]/30 dark:bg-brand-950/20 px-6 py-3.5 flex items-center justify-between text-xs text-gray-500 dark:text-brand-300/70">
          <span>
            Showing <strong className="font-semibold text-gray-900 dark:text-brand-50">{users.length}</strong> {users.length === 1 ? 'user' : 'users'}
          </span>
          {searchQuery && (
            <span className="italic">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default UserTable;
