
import React from 'react';
import { 
  House, 
  Users, 
  Package, 
  PlusCircle, 
  ClipboardList, 
  ShoppingCart, 
  Settings,
  LogOut,
  X
} from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: 'Dashboard', icon: <House size={18} />, active: true },
    { name: 'Users', icon: <Users size={18} />, active: false },
    { name: 'Products', icon: <Package size={18} />, active: false },
    { name: 'Add Product', icon: <PlusCircle size={18} />, active: false },
    { name: 'Orders', icon: <ClipboardList size={18} />, active: false },
    { name: 'Carts', icon: <ShoppingCart size={18} />, active: false },
    { name: 'Settings', icon: <Settings size={18} />, active: false },
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
              <span className="text-[11px] font-bold tracking-widest text-brand-500 uppercase">
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
          </div>

          <nav className="space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  item.active
                    ? 'bg-brand-900 dark:bg-brand-800 text-white shadow-sm'
                    : 'text-brand-700 dark:text-brand-300 hover:bg-brand-100/70 dark:hover:bg-brand-900/30'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-brand-200/60 dark:border-brand-900/40">
          <button
            onClick={() => alert("Logged out")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold shadow-sm transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>

      </aside>
    </>
  );
}

export default Sidebar