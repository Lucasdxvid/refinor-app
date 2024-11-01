import dashboardIcon from "../../assets/icons/nav/dashboard.svg";
import transactionsIcon from "../../assets/icons/nav/transactions.svg";
import usersCompany from "../../assets/icons/nav/usersCompany.svg";
import refinorPoints from "../../assets/icons/nav/refinorPoints.svg";
import resources from "../../assets/icons/nav/resources.svg";
import benefits from "../../assets/icons/nav/benefits.svg";
import notifications from "../../assets/icons/nav/notifications.svg";
import general from "../../assets/icons/nav/general.svg";

const adminMenu = [
  { name: "Dashboard", icon: dashboardIcon, href: "#" },
  { name: "Transacciones", icon: transactionsIcon, href: "#" },
  { name: "Usuarios", icon: usersCompany, href: "#" },
  { name: "Empresas", icon: usersCompany, href: "#" },
  { name: "Puntos Refinor", icon: refinorPoints, href: "#" },
  { name: "Recursos", icon: resources, href: "#" },
  { name: "Beneficios", icon: benefits, href: "#" },
  { name: "Notificaciones", icon: notifications, href: "#" },
  { name: "Categorías", icon: general, href: "#" },
  { name: "Agrupaciones puntos refinor", icon: general, href: "#" },
  { name: "Productos", icon: general, href: "#" },
  { name: "Vendedores", icon: general, href: "#" },
  { name: "Operadores", icon: general, href: "#" },
  { name: "Usuarios Call Center", icon: general, href: "#" },
  { name: "Auditorias", icon: general, href: "#" },
  { name: "Configuración", icon: general, href: "#" },
];

export default adminMenu;
