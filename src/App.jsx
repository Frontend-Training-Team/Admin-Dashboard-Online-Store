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
import LoginPage from './pages/Login';
import DashboardLayout from './components/Layout/dashboardLayout';
import { ToastContainer, Slide  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
function App() {

  return (<>
  <ToastContainer 
    position="top-right" 
    autoClose={2000} 
    hideProgressBar={true} 
    transition={Slide}
    toastClassName="!rounded-2xl !shadow-md !h-12 !w-60 !text-sm !p-2 !m-2 !text-center"
    closeButton={false}
  />
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
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          background: '#1f1a17',
          color: '#fff',
        },
      }}
    />
  </>)


}


export default App;