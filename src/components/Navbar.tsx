
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Calendar, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FerroHub Sports</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/locations" className="text-gray-700 hover:text-green-600 flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Locations</span>
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-green-600 flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Book Court</span>
            </Link>
            <Link to="/coaching" className="text-gray-700 hover:text-green-600">
              Coaching
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </Button>
                </Link>
                <Button variant="ghost" onClick={handleLogout} className="flex items-center space-x-1">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
