import { Link } from "react-router-dom";

function NavbarItem({ href, icon, name }) {
  return (
    <li>
      <Link
        to={href}
        className="flex items-center w-full px-4 py-2 rounded-md hover:bg-green-800 font-bold"
      >
        <img src={icon} alt={`${name} icon`} className="mr-2 w-5 h-5" />
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default NavbarItem;