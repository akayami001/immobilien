"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNotificationStore } from "../../lib/notificationStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const { currentUser } = useContext(AuthContext);

  // const fetch = useNotificationStore((state) => state.fetch);
  // const number = useNotificationStore((state) => state.number);

  // if(currentUser) fetch();
  
  return (
    <nav className="flex justify-between">
      <div className="left">
        <Link href="/" className="flex items-center hover:underline">
          <Image src="/neugierig.png" alt="logo" width={32} height={32} />
          <span>Immobilien</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li className="block p-2 antialiased leading-normal hover:bg-bgWhite hover:rounded-lg">
            <Link href="/" className="flex items-center hover:underline">
              Anasayfa
            </Link>
          </li>
          <li className="block p-2 antialiased leading-normal hover:bg-bgWhite hover:rounded-lg">
            <Link
              href="/hakkimizda"
              className="flex items-center hover:underline"
            >
              Hakkimizda
            </Link>
          </li>
          <li className="block p-2 antialiased leading-normal hover:bg-bgWhite hover:rounded-lg">
            <Link
              href="/iletisim"
              className="flex items-center hover:underline"
            >
              Iletisim
            </Link>
          </li>
          <li className="block p-2 antialiased leading-normal hover:bg-bgWhite hover:rounded-lg">
            <Link
              href="/danismanlarimiz"
              className="flex items-center hover:underline"
            >
              Danismanlarimiz
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="/register"
          >
            Register
          </Link>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="menu">
          <Link href="/">Anasayfa</Link>
          <Link href="/hakkimizda">Hakkimizda</Link>
          <Link href="/iletisim">Iletisim</Link>
          <Link href="/danismanlarimiz">Danismanlarimiz</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
