import { useState } from 'react';
import { Bell, Moon, Sun } from 'lucide-react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between z-50">
            {/* جهة الشمال: اللوجو وعنوان الداشبورد */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    {/* استبدل اللوجو بملف الـ SVG أو مسار الصورة الخاص بـ Lamsa */}
                    <img
                        src="/lamsa-logo.png"
                        alt="Lamsa Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                <div className="border-l border-gray-200 pl-6">
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">
                        Lamsa Dashboard
                    </h1>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                        E-Commerce Admin Panel
                    </p>
                </div>
            </div>

            {/* جهة اليمين: أدوات التحكم والبروفايل */}
            <div className="flex items-center gap-4">
                {/* زر التنبيهات */}
                <button
                    className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors relative"
                    aria-label="Notifications"
                >
                    <Bell size={20} />
                    {/* نقطة تنبيه صغيرة اختيارية */}
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* زر تبديل الوضع الليلي */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* الصورة الشخصية */}
                <div className="relative pl-2">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 cursor-pointer hover:ring-gray-300 transition-all"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;