import { Link } from "react-router-dom";
import { FaInstagram, FaRegClock, FaPhone } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-moku text-base-content p-10">
      {/* Brand */}
      <div className="col-span-2 md:col-span-1">
        <p className="text-white text-xl font-medium tracking-wider">MOKUTON</p>
        <p className="text-xs text-stone-300 mb-3">Coffee & Co.</p>
        <p className="text-xs text-stone-300 leading-relaxed">
          Not a coffee addict.
          <br />
          Just a little over attached to it.
        </p>
      </div>

      {/* Info */}
      <nav>
        <h6 className="footer-title text-xl text-white">Info</h6>

        <div className="flex items-start gap-2 text-stone-300 text-sm">
          <span><SiGooglemaps/></span>
          <span>Jl. Singosari, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</span>
        </div>

        <div className="flex items-center gap-2 text-stone-300 text-sm mt-1">
          <span><FaRegClock/></span>
          <span>14.00 – 24.00</span>
        </div>

        <div className="flex items-center gap-2 text-stone-300 text-sm mt-1">
          <span><FaPhone/></span>
          <span>+62 812-3456-7890</span>
        </div>

        <div className="flex items-center gap-2 text-stone-300 text-sm mt-1">
          <span><MdOutlineMail/></span>
          <span>hello@mokuton.com</span>
        </div>
      </nav>

      {/* Sosial Media */}
      <nav>
        <h6 className="footer-title text-xl text-white">Sosial Media</h6>

        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/mokutoncoffee"
            target="_blank"
            rel="noreferrer"
            className="text-stone-300 hover:text-white transition-colors"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="text-stone-300 hover:text-white transition-colors"
          >
            <IoLogoWhatsapp size={30} />
          </a>

          <a
            href="https://www.tiktok.com/@mokutoncoffee"
            target="_blank"
            rel="noreferrer"
            className="text-stone-300 hover:text-white transition-colors"
          >
            <IoLogoTiktok size={30} />
          </a>
        </div>
      </nav>
      {/* Information */}
      <nav>
        <h6 className="footer-title text-xl text-white">Information</h6>
        <Link to="/ShopCoffee" className="link link-hover text-lg text-stone-300">
          Shop Coffee
        </Link>
      </nav>
    </footer>
  );
}
