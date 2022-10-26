import Link from "next/link";

import Button from "../button";
import { useRouter } from "next/dist/client/router";
function Navbar() {
  const router = useRouter();
  // console.log(router.asPath)
  return (
    <>
      <div className="flex justify-between items-center mx-auto container text-genoa py-16 md:px-32">
        <div className="flex  items-center space-x-3">
          {/* <img src="/Switch.svg" alt="logo"/ > */}
          <Link href="/">
            <div className="w-10 h-10 rounded-full bg-genoa" />
          </Link>
          <p className="font-bold text-lg text-darkgenoa">BuildIt</p>
        </div>
        <ul className="flex space-x-5">
          {/* <li><Link href='/About' className={router.asPath==='/About'? "active" : "text-red-400"}>About</Link> </li> */}
          <li>
            <Link href="/About">About</Link>{" "}
          </li>
          <li>
            <Link href="/Services">Service</Link>{" "}
          </li>
          <li>
            <Link href="/Projects">Projects</Link>{" "}
          </li>
          <li>
            <Link href="/Contact">Contact</Link>{" "}
          </li>
        </ul>
        <Button
          text="Need a Project?"
          style={"bg-genoa px-8 py-3 text-white"}
        />
      </div>
    </>
  );
}
export default Navbar;
