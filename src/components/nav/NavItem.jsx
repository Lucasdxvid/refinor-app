function NavbarItem({ href, icon, name }) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center w-full px-4 py-2 rounded-md hover:bg-green-800 font-bold"
      >
        <img src={icon} alt={`${name} icon`} className="mr-2 w-5 h-5" /> {/* Ajusta w-6 h-6 según sea necesario */}
        <span>{name}</span>
      </a>
    </li>
  );
}

export default NavbarItem;
