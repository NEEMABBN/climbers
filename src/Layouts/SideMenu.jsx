import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function SideMenu({ isOpen, toggleMenu }) {
  return (
    <div
      className={`${
        isOpen ? "right-0" : "right-[-30rem]"
      } fixed top-0 transition-all duration-300 pt-7 bg-white md:hidden flex flex-col items-center z-[100000] w-[60%] h-screen shadow-[0_0_90px_-20px_rgba(14,154,138,0.40)]`}
    >
      <button
        onClick={toggleMenu}
        className="text-3xl text-Secoundray w-full text-start px-5"
      >
        <IoClose />
      </button>
      <ul className="w-full flex flex-col items-start px-5 gap-4">
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            خانه
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            تورها
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/agencies"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            نقشه
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/tourist-attractions"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            اماکن
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            گزارش برنامه
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            تیم‌ها
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/somepage"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            فروشگاه
          </NavLink>
        </li>
        <li className="w-full border-solid border-b-[1px] border-Borders py-3">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${isActive ? "text-Primary" : "text-Secoundray"} w-full`
            }
          >
            بلاگ
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
