import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full z-50 bg-black text-white">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-10">

        {/* LOGO */}
        <Link
          to="/"
          className="hover:opacity-60 transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lg">

          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="hover:text-blue-400 transition-colors">
              Services
            </span>

            {servicesOpen && (
              <div className="absolute top-full left-0 flex flex-col w-60 bg-white text-black rounded-xl shadow-xl p-4 gap-3">

                <Link to="/web-development" onClick={() => setServicesOpen(false)} className="hover:text-blue-400">
                  Web Development
                </Link>

                <Link to="/seo" onClick={() => setServicesOpen(false)} className="hover:text-blue-400">
                  SEO
                </Link>

                <Link to="/uiux-design" onClick={() => setServicesOpen(false)} className="hover:text-blue-400">
                  UI/UX Design
                </Link>

                <Link to="/data-analytics" onClick={() => setServicesOpen(false)} className="hover:text-blue-400">
                  Data Analytics
                </Link>

              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition-colors">
            Contact Us
          </Link>

        </nav>

        {/* HAMBURGER ICON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden fixed top-20 right-0 w-80  h-100 bg-black/60 border-white/10 px-15 py-4 flex flex-col gap-4 text-lg rounded-2xl">

          {/* HOME */}
          <Link
            to="/"
            className="hover:text-blue-400 "
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* MOBILE SERVICES (ACCORDION) */}
          <div className="">

            <button
              className="hover:text-blue-400 "
              onClick={() =>
                setMobileServicesOpen(!mobileServicesOpen)
              }
            >
              Services {mobileServicesOpen ? '▲' : '▼'}
            </button>

            {mobileServicesOpen && (
              <div className="flex flex-col gap-2 pl-4">

                <Link to="/web-development" className="hover:text-blue-400 " onClick={() => setMenuOpen(false)}>
                  Web Development
                </Link>

                <Link to="/seo" className="hover:text-blue-400 " onClick={() => setMenuOpen(false)}>
                  SEO
                </Link>

                <Link to="/uiux-design" className="hover:text-blue-400 " onClick={() => setMenuOpen(false)}>
                  UI/UX Design
                </Link>

                <Link to="/data-analytics" className="hover:text-blue-400 " onClick={() => setMenuOpen(false)}>
                  Data Analytics
                </Link>

              </div>
            )}

          </div>

          {/* ABOUT */}
          <Link
            to="/about"
            className="hover:text-blue-400 "
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="hover:text-blue-400 "
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

        </div>
      )}

    </header>
  )
}

export default Navbar