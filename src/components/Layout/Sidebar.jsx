import { NavLink } from 'react-router-dom';
import { House, Users, Package, PlusCircle, ClipboardList, ShoppingCart, Settings, LogOut, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';



function Sidebar({ isOpen, onClose }) {
  const { logout } = useAuth();
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <House size={18} /> },
    { name: 'Users', path: '/users', icon: <Users size={18} /> },
    { name: 'Products', path: '/products', icon: <Package size={18} /> },
    { name: 'Add Product', path: '/products/new', icon: <PlusCircle size={18} /> },
    { name: 'Orders', path: '/orders', icon: <ClipboardList size={18} /> },
    { name: 'Carts', path: '/carts', icon: <ShoppingCart size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`w-64 h-screen shrink-0 p-5 flex flex-col justify-between border-r border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark transition-transform duration-200 z-50 fixed inset-y-0 left-0 lg:static ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          <div className="flex items-start justify-between mb-8 px-2">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
                COMMERCE
              </span>
              <h1 className="text-xl font-bold text-brand-900 dark:text-brand-50">
                Admin Panel
              </h1>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-900/40 lg:hidden"
            >
              <X size={20} />
            </button>
          </div> {/* Button Close */}

          <nav className="space-y-1.5">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[18px] font-Inter
                  font-medium transition-all duration-150 active:scale-90 hover:scale-105 
                ${isActive
                    ? 'bg-brand-900 dark:bg-brand-800 text-white shadow-sm'
                    : 'text-brand-700 dark:text-brand-300 hover:bg-brand-100/70 dark:hover:bg-brand-900'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-brand-200 dark:border-brand-900/40">
          <button
            onClick={() => { logout(); }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-rose-600 active:scale-90
            text-[18px] font-semibold text-red-500  hover:bg-rose-600 hover:text-white shadow-sm transition-all"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>{/* Logout button */}
      </aside>{/* aside */}
    </>
  );
}

export default Sidebar;