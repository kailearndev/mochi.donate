/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: NavBar.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../../styles.js';
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5
      fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={bl33hIcon} alt={bl33hIcon} className="w-18 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10" style={{ color: '#b3286c' }}>
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[24px] font-bold cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;