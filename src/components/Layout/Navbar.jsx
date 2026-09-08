import { useDarkMode } from '../../hooks/useDarkMode';
import { Bell, Moon, Sun, Menu } from 'lucide-react';
import logo from '../../assets/images/4.png';
import imgUser from '../../assets/images/Guest.jpg';

export default function Navbar({ onToggleSidebar }) {

  const { isDark, toggleTheme } = useDarkMode();

  return (
    <header className="h-16 sm:h-18 px-4 sm:px-8 flex items-center justify-between border-b border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark transition-colors">

      <div className="flex items-center gap-2 sm:gap-6 min-w-0">

        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Open Menu"
          className="p-2 rounded-xl bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 lg:hidden shrink-0">
          <Menu size={20} />
        </button>

        <img src={logo} alt="Lamsa Logo"
          className="w-40 sm:w-50 h-12 sm:h-20 rounded-xl object-contain shrink-0"
        />

        <div className="min-w-0">
          <h2 className="hidden sm:block text-sm sm:text-xl font-bold mt-0.5 sm:mt-1 text-black dark:text-brand-50 leading-tight truncate">
            Lamsa Dashboard
          </h2>

          <p className="hidden sm:block text-xs text-[#939393] dark:text-brand-300">E-Commerce Admin Panel</p>
        </div>

      </div>

      <div className="flex items-center gap-2 sm:gap-3 pr-0 sm:pr-4 shrink-0">

        <button
          className="p-2 sm:p-3 bg-brand-100 rounded-xl text-brand-700 dark:bg-brand-900 dark:text-brand-300 hover:bg-brand-100/60 dark:hover:bg-brand-900/40 transition-colors">
          <Bell size={18} />
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 sm:p-3 bg-brand-100 rounded-xl text-brand-700 dark:bg-brand-900 dark:text-brand-300 hover:bg-brand-100/60 dark:hover:bg-brand-900/40 transition-colors">
          {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
        </button>

        <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-brand-200/60 dark:border-brand-900/40">
          <img src={imgUser} alt="Admin Avatar"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-brand-500/30"
          />
        </div>

      </div>

    </header>
  );
}