import Link from "next/link";
import logo from "../../public/sweets.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-red-900/90 text-orange-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-900/90 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {/* <a>Homepage</a> */}
                <Link href="/">Homepage</Link>
              </li>
              <li>
                {/* <a>About Us</a> */}
                <Link href="/about">About Us</Link>
              </li>
              <li>
                {/* <a>Product</a> */}
                <Link href="/product">Product</Link>
              </li>
              <li>
                {/* <a>Team</a> */}
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <div>
              <Image
                src={logo}
                alt="Our company logo"
                width={100}
                height={100}
                className="rounded-full max-w-14 max-h-14"
              />
            </div>
            Sweet Crumbs Bakery
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* <a>Homepage</a> */}
              <Link href="/">Homepage</Link>
            </li>
            <li>
              {/* <a>About Us</a> */}
              <Link href="/about">About Us</Link>
            </li>
            <li>
              {/* <a>Product</a> */}
              <Link href="/product">Product</Link>
            </li>
            <li>
              {/* <a>Team</a> */}
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </>
  );
}
