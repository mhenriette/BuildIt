import Link from "next/link";

function Footer() {
  return (
    <footer className="  p-10 bg-darkgenoa">
      <div className="text-white grid grid-cols-4 mx-auto container">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-white text-base"> Buildit</h1>
            <p className="">Development company, 2022</p>
          </div>
          <p>Site design – ⏰ Alarm</p>
        </div>
        <div>
          <ul className="flex flex-col space-y-3">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>
          <div className="flex space-x-3">
            <img src="/insta.svg" alt="insta" />
            <img src="/facebook.svg" alt="facebook" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col space-y-3">
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-3">
            <Link href="/Contact">Get in Touch</Link>
            <p>
              60 Manor Station St. Fairport,
              <br /> NY 14450
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <p>708-790-0000</p>
            <p>sales@buildit.site</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
