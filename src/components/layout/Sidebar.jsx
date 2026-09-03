import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Users', to: '/users' },
  { label: 'Products', to: '/products' },
  { label: 'Orders', to: '/orders' },
  { label: 'Carts', to: '/carts' },
  { label: 'Settings', to: '/settings' },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-40 rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 shadow-lg transition hover:bg-slate-800 lg:hidden"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span className="block h-0.5 w-5 bg-current" />
        <span className="my-1.5 block h-0.5 w-5 bg-current" />
        <span className="block h-0.5 w-5 bg-current" />
      </button>

      {isOpen && (
        <button type="button" className="fixed inset-0 z-40 bg-slate-950/70 lg:hidden" aria-label="Close navigation" onClick={closeSidebar}/>
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-slate-800 bg-slate-950 px-5 py-6 transition-transform duration-200 lg:static lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-start justify-between border-b border-slate-800 pb-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">LAMSA</p>
            <h1 className="mt-2 text-xl font-semibold text-white">Admin Dashboard</h1>
          </div>
          <button type="button" className="rounded-md p-1 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden" aria-label="Close navigation" onClick={closeSidebar}>X</button>
        </div>

        <nav className="mt-8 space-y-2" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-slate-800 text-white shadow-inner shadow-cyan-400/10' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'}`}
            >
              {/* <icon /> */}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-lg shadow-cyan-950/30">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-100">Live</p>
          <p className="mt-2 text-sm font-semibold leading-5">Connected to the E-commerce API</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
