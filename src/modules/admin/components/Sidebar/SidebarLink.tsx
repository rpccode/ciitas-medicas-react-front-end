
import { Link } from "react-router-dom";
import { Route } from "../../routes/routes";
import { Icon } from "@tremor/react";

const SidebarLink = ({ route }:Route) => (
  <li className="items-center ">
    <Link
      className={
        "text-xs uppercase py-3 font-bold block " +
        (window.location.href.indexOf(route.path) !== -1
          ? "text-lightBlue-500 hover:text-lightBlue-600"
          : "text-blueGray-700 hover:text-blueGray-500")
      }
      to={route.path}
    >
      <Icon
        className={(window.location.href.indexOf(route.path) !== -1
          ? "opacity-75"
          : "text-blueGray-300")} icon={route.icon}      ></Icon>{" "}
      {route.name}
    </Link>
  </li>
);

export default SidebarLink;