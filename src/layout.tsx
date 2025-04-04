import React from 'react';
import Navbar from './components/Navbar';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Navbar className="w-1/4" /> {/* Adjust width as needed */}
      <main className="flex-grow w-3/4">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;