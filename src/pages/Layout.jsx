import React from "react";
import Navbar from "../components/nav/Navbar";
import adminMenu from "../components/nav/AdminMenu";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuItems={adminMenu} />

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
