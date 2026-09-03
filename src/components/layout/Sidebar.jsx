import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, House, ShoppingCart, Users, Settings } from 'lucide-react'

const navigationItems = [
  { label: 'Dashboard', to: '/' , icon: <House/>},
  { label: 'Users', to: '/users' , icon: <Users/>},
  { label: 'Products', to: '/products' , icon: <ShoppingCart/>},
  { label: 'Orders', to: '/orders' , icon: <Box/>},
  { label: 'Carts', to: '/carts' , icon: <ShoppingCart/>},
  { label: 'Settings', to: '/settings', icon: <Settings/> },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-40 rounded-lg border border-brand-700 bg-brand-900 p-2 text-brand-100 shadow-lg transition hover:bg-brand-800 lg:hidden"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        {/* <icon /> */}
      </button>

      {isOpen && (
        <button type="button" className="fixed inset-0 z-40 bg-brand-950/70 lg:hidden" aria-label="Close navigation" onClick={closeSidebar}/>
      )}

      <aside className={`min-h-screen fixed z-50 inset-y-0 left-0 flex w-80 flex-col border-r border-brand-800 bg-brand-950 px-5 py-6 transition-transform duration-200 lg:static lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-start justify-between border-b border-brand-800 pb-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-300">LAMSA</p>
            <h1 className="mt-2 text-xl font-semibold text-brand-50">Admin Dashboard</h1>
          </div>
          <button type="button" className="rounded-md p-1 text-brand-700 hover:bg-brand-800 hover:text-brand-50 lg:hidden" aria-label="Close navigation" onClick={closeSidebar}>X</button>
        </div>

        <nav className="mt-8 space-y-2" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-brand-800 text-brand-50 shadow-inner shadow-brand-300/10' : 'text-brand-200 hover:bg-brand-900 hover:text-brand-100'}`}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar