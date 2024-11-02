import NavbarItem from "./NavItem";

function Navbar({ menuItems }) {
  return (
    <nav className="fixed top-0 left-0 w-64 h-screen text-gray-800 p-4 bg-menuPrimary border border-y-menuSecundary">
      <ul className="mt-4 space-y-4">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
