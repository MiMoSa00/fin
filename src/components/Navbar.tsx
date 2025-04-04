import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaUserCircle, FaHome, FaChartLine, FaPiggyBank, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import Login from './Login';
import Signup from './Signup';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleModal = (isLogin: boolean) => {
    setIsLogin(isLogin);
    setIsModalOpen(true);
  };

  const handleLogin = (email: string, password: string) => {
    setUserName(email.split('@')[0]);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleSignup = (email: string, password: string, confirmPassword: string, dob: string, phone: string) => {
    if (password === confirmPassword) {
      setUserName(email.split('@')[0]);
      setIsLoggedIn(true);
      setIsModalOpen(false);
    } else {
      alert('Passwords do not match');
    }
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar-menu') && !target.closest('.navbar-toggle')) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-teal-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="navbar-toggle text-white font-bold hover:bg-gray-700 hover:text-white px-2 py-1 rounded-full text-sm sm:hidden">
              ☰
            </button>
            <h1 className='text-white text-lg sm:text-xl font-bold ml-2'>Fin-Tech</h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 px-2 py-1 font-bold outline-white rounded-md text-sm text-gray-900 w-24 sm:w-32 md:w-48 lg:w-64"
            />
          </div>
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
            <a href="#" className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Investments</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Savings</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Profile</a>
            {isLoggedIn ? (
              <>
                <span className="text-white flex items-center">
                  <FaUserCircle className="mr-2" /> {userName}
                </span>
                <button onClick={handleLogout} className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => toggleModal(true)} className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Login</button>
                <button onClick={() => toggleModal(false)} className="text-white hover:bg-gray-700 hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="-translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="navbar-menu sm:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-800 bg-opacity-75 z-40">
          <div className="flex justify-end p-2">
            <button onClick={closeMenu} className="text-white font-bold hover:bg-gray-700 hover:text-white px-2 py-1 rounded-full text-sm">
              X
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
              <FaChartLine className="mr-2" /> Investments
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
              <FaPiggyBank className="mr-2" /> Savings
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
              <FaUserCircle className="mr-2" /> Profile
            </a>
            {isLoggedIn ? (
              <>
                <span className="text-gray-300 flex items-center">
                  <FaUserCircle className="mr-2" /> {userName}
                </span>
                <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => toggleModal(true)} className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
                  <FaSignInAlt className="mr-2" /> Login
                </button>
                <button onClick={() => toggleModal(false)} className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-1 rounded-md text-base font-medium">
                  <FaUserPlus className="mr-2" /> Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </Transition>

      {/* Modal for Login/Signup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            {isLogin ? (
              <Login onSubmit={handleLogin} onCancel={() => setIsModalOpen(false)} />
            ) : (
              <Signup onSubmit={handleSignup} onCancel={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;