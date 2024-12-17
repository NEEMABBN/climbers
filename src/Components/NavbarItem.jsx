import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavbarItem() {
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [location]);

  return (
    <div className="md:flex hidden w-full border-solid border-y-[1px] border-Borders">
      <ul className="container mx-auto flex items-center justify-start relative gap-3 py-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            تورها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agencies"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            نقشه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tourist-attractions"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            اماکن
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            گزارش برنامه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            تیم‌ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/somepage"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            فروشگاه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${
                isActive ? "text-Primary nav-link active" : "nav-link nav-link"
              }`
            }
          >
            بلاگ
          </NavLink>
        </li>
        <div
          className="absolute bottom-0 h-1.5 rounded-full bg-Primary transition-all duration-300"
          style={underlineStyle}
        ></div>
      </ul>
    </div>
  );
}
