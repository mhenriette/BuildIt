import Link from "next/link";

import Button from "../Button";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  function gotoproject() {
    router.push("/Projects");
  }

  return (

      <div className="flex justify-between items-center mx-auto container text-genoa py-16 md:px-32 relative z-20">
        <div className="flex  items-center space-x-3">
          <Link href="/">
            <div className="w-10 h-10 rounded-full bg-genoa" />
          </Link>
          <p className="font-bold text-lg text-darkgenoa">BuildIt</p>
        </div>
        <ul className="flex space-x-5">
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Services">Service</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <Button
          text="Need a Project?"
          style={"bg-genoa px-8 py-3 text-white"}
          onclick={gotoproject}
        />
      </div>
  
  );
}
export default Navbar;
