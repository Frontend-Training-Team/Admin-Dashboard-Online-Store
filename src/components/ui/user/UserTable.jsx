import UserRow from './UserRow';
import { Users, SearchX } from 'lucide-react';

function UserTable({ users, loading, onEdit, onToggleRole, onDelete, togglingUserId, searchQuery, onClearSearch, }) {

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-coal-800 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          {/* Table Header matching Figma (#FFEFDD in light, #1E2435 in dark) */}
          <thead className="bg-[#FFEFDD] dark:bg-coal-700 border-b border-transparent dark:border-surface-borderDark">
            <tr>
              <th className="px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-content-muted uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-content-muted uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-content-muted uppercase tracking-wider">
                Verified
              </th>
              <th className="px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-content-muted uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-[rgba(255,255,255,0.06)]">
            {/* Loading Skeleton */}
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="animate-pulse dark:bg-[#1E2435]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gray-200/70 dark:bg-coal-700" />
                      <div className="space-y-2">
                        <div className="h-4 w-28 rounded bg-gray-200/70 dark:bg-coal-700" />
                        <div className="h-3 w-40 rounded bg-gray-200/40 dark:bg-coal-700/60" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 w-16 rounded bg-gray-200/70 dark:bg-coal-700" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 w-20 rounded bg-gray-200/70 dark:bg-coal-700" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-coal-700" />
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-coal-700" />
                      <div className="h-9 w-9 rounded-xl bg-gray-200/70 dark:bg-coal-700" />
                    </div>
                  </td>
                </tr>
              ))
            ) : users.length === 0 ? (
              /* Empty State */
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center">
                  <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
                    <div className="rounded-2xl bg-[#FFEFDD] dark:bg-coal-700 p-4 text-[#A36037] mb-3">
                      {searchQuery ? <SearchX size={32} /> : <Users size={32} />}
                    </div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-content-primary">
                      {searchQuery ? 'No matching users found' : 'No users available'}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400 dark:text-content-muted">
                      {searchQuery
                        ? `No users matched "${searchQuery}". Try searching with a different keyword.`
                        : 'There are currently no users in the database.'}
                    </p>
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={onClearSearch}
                        className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-[#A36037] hover:bg-[#8F4F28] text-white dark:bg-copper-500 dark:hover:bg-copper-600 dark:text-content-inverse transition cursor-pointer"
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
        <div className="border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] bg-[#FFEFDD]/30 dark:bg-coal-700 px-6 py-3.5 flex items-center justify-between text-xs text-gray-500 dark:text-content-muted">
          <span>
            Showing <strong className="font-semibold text-gray-900 dark:text-content-primary">{users.length}</strong> {users.length === 1 ? 'user' : 'users'}
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
