import { NavLink } from "react-router-dom";
import links from "../utils/links";

const Navlinks = (toggle) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, id, path, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            key={id}
            onClick={toggle}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
