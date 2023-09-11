import React, { useState } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  function redireccionar() {
    navigate("/prueba");
  }

  let [open, setOpen] = useState(false);

  let Drawer = () => (
    <div className="h-screen w-1/2 absolute top-0 left-0 bg-[#323232] z-30 flex flex-col p-4 gap-4 px-8">
      <button
        onClick={() => setOpen(false)}
        className="rounded absolute right-4 w-fit"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M1.70711 0.292893C1.31658 -0.097631 0.683419 -0.0976311 0.292895 0.292893C-0.0976294 0.683417 -0.0976296 1.31658 0.292895 1.70711L5.58574 6.99996L0.292802 12.2929C-0.0977226 12.6834 -0.0977226 13.3166 0.292802 13.7071C0.683326 14.0976 1.31649 14.0976 1.70702 13.7071L6.99995 8.41417L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41417 6.99996L13.707 1.70711C14.0975 1.31658 14.0975 0.683419 13.707 0.292895C13.3165 -0.0976298 12.6833 -0.0976294 12.2928 0.292895L6.99995 5.58574L1.70711 0.292893Z"
            fill="white"
          />
        </svg>
      </button>
      <nav className="mt-12 flex flex-col gap-4 text-white">
        <Anchor to="/">Home</Anchor>
        <Anchor to="/mangas">Mangas</Anchor>
        <button
          onClick={redireccionar}
          className="text-white border-solid	border-gray-300	border-2 p-1 rounded-md	"
        >
          PRUEBA
        </button>
      </nav>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 left-0 w-full p-4 flex justify-between z-10">
        <div className="hover:bg-black/50 flex justify-center items-center rounded px-2 py-1">
          <img
            onClick={() => setOpen(true)}
            className="w-10 cursor-pointer"
            src="/images/menu.png"
            alt="menu"
          />
        </div>
        <img
          className="w-16 object-contain"
          src="/images/logo.png"
          alt="logo"
        />
      </header>
      {/* RENDERIZADO CONDICIONAL */}
      {open && <Drawer />}
    </>
  );
};

export default Navbar;
