import Link from "next/link";

function Logos() {
  return (
 
      <div className="flex mx-auto container md:px-32 justify-center items-center border-y-2 py-8 border-genoa my-20">
        <ul className="flex space-x-8 items-center">
          <li>
            <Link href="/">
              <img src="/logos1.svg" alt="logo1" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/logo2.svg" alt="logo2"  />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/logo3.svg" alt="logo3" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/logo4.svg" alt="logo4" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/logo5.svg" alt="logo5"  />
            </Link>
          </li>
        </ul>
      </div>
   
  );
}
export default Logos;
