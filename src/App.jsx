import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Users from './pages/Users';
import Carts from './pages/Carts';
import Settings from './pages/Settings';
import LoginPage from './pages/login';
import DashboardLayout from './components/Layout/dashboardLayout';
import ViewProduct from './pages/ViewProduct';

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
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/products/view" element={<ViewProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )


}


export default App;