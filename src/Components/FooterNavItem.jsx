import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterNavItem() {
  return (
    <div className="flex items-center sm:gap-7 gap-24">
      <ul className="flex sm:flex-row flex-col items-start gap-7">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tours"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            تورها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/TouristAttractions"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            نقشه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Agencies"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            اماکن
          </NavLink>
        </li>
      </ul>
      <ul className="flex sm:flex-row flex-col items-start gap-7">
        <li>
          <NavLink
            to="/Reports"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            گزارش برنامه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            تیم‌ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/somepage"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            فروشگاه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Blogs"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} text-nowrap`
            }
          >
            بلاگ
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
