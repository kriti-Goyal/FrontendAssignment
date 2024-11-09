import { Link, Outlet } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

function Dashboard() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Sale Order Management</h1>
        {/* <DarkModeToggle /> */}
      </header>
      <nav>
        <Link to="/dashboard/active-orders" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mr-4">Active Orders</Link>
        <Link to="/dashboard/completed-orders"className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Completed Orders</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
