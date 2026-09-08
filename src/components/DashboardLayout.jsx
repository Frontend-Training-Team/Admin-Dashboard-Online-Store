import { Outlet } from 'react-router-dom';
//import Sidebar from './Sidebar'; (remove comment when sidebar exists)

export default function DashboardLayout() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6">
        <Outlet /> {/* whichever dashboard page matched renders here */}
      </main>
    </div>
  );
}