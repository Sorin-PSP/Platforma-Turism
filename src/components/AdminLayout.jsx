import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout, getCurrentUser } from '../services/authService';
import { 
  FaTachometerAlt, 
  FaGlobe, 
  FaList, 
  FaSignOutAlt, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaHome
} from 'react-icons/fa';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = getCurrentUser();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { path: '/admin/partners', label: 'Website-uri Partenere', icon: <FaGlobe /> },
    { path: '/admin/offers', label: 'Oferte', icon: <FaList /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <div 
        className={`fixed inset-0 z-20 transition-opacity ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 overflow-y-auto transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">Admin Panel</span>
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                isActive(item.path)
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          
          {/* Return to site button */}
          <Link
            to="/"
            className="group flex items-center px-2 py-2 mt-4 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="mr-3"><FaHome /></span>
            Înapoi la site
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-white w-full"
          >
            <FaSignOutAlt className="mr-3" />
            Deconectare
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex justify-between items-center">
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>

            <div className="flex items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <span className="ml-2 text-gray-700">{user?.username || 'Admin'}</span>
              </div>
            </div>
            
            {/* Return to site button in header for better visibility */}
            <Link
              to="/"
              className="flex items-center text-primary hover:text-primary-dark"
            >
              <FaHome className="mr-1" />
              <span>Înapoi la site</span>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
