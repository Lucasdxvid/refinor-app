function NavbarItem({ href, icon, name }) {
    return (
      <li>
        <a
          href={href}
          className="flex items-center w-full px-4 py-2 rounded-md hover:bg-green-800"
        >
          <img src={icon} alt={`${name} icon`} className="mr-2" />
          <span>{name}</span>
        </a>
      </li>
    );
  }
  
  export default NavbarItem;
  