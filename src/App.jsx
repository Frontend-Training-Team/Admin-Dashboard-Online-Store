import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout'; // sidebar + <Outlet>
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Users from './pages/Users';
import Carts from './pages/Carts';
import Settings from './pages/Settings';
import LoginPage from './pages/Login';

function App() {
  return (
     <Routes>
      {/* Public route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Private routes — everything inside requires admin auth */}
      <Route element={<ProtectedRoute allowedRole="admin" />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/new" element={<AddProduct />} />
          <Route path="/dashboard/products/:id/edit" element={<EditProduct />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/orders/:id" element={<OrderDetails />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/carts" element={<Carts />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )


}

export default App;