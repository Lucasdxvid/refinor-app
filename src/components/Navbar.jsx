import dashboard from "../assets/icons/dashboard.svg";
import transactions from "../assets/icons/transactions.svg";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen text-graw-800 p-4 bg-menuPrimary border border-y-menuSecundary">
      <ul className="mt-4 space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center w-full px-4 py-2 rounded-md hover:bg-green-800"
          >
            <img src={dashboard} alt="e-mail icon" className="mr-2" />{" "}
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
      <ul className="mt-4 space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center w-full px-4 py-2 rounded-md hover:bg-green-800"
          >
            <img src={transactions} alt="e-mail icon" className="mr-2" />{" "}
            <span>Transacciones</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
