import { FaRegClock } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-4 w-80">
      {/* Alamat */}
      <div className="card bg-base-100 border border-base-200 shadow-none p-5">
        <p className="text-xl font-bold uppercase tracking-widest text-moku mb-3">
          Alamat
        </p>
        <div className="flex items-start gap-3 text-sm">
          <span><SiGooglemaps className="text-xl text-moku"/></span>
          <span>Jl. Singosari, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</span>
        </div>
      </div>

      {/* Jam Buka */}
      <div className="card bg-base-100 border border-base-200 shadow-none p-5">
        <p className="text-xl font-bold uppercase tracking-widest text-moku mb-3">
          Jam Buka
        </p>
        <div className="flex items-start gap-3 text-sm">
          <span><FaRegClock className="text-xl text-moku"/></span>
          <div>
            <p>Office: 08.00 – 16.00</p>
            <p className="text-xs text-gray-400">
              Slow Bar & Shop: 15.00 – 23.00
            </p>
          </div>
        </div>
      </div>

      {/* Kontak */}
      <div className="card bg-base-100 border border-base-200 shadow-none p-5">
        <p className="text-xl font-bold uppercase tracking-widest text-moku mb-3">
          Kontak
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-3">
            <span><FaPhone className="text-moku text-lg"/></span>
            <span>+62 812-345-678</span>
          </div>
          <div className="flex items-center gap-3">
            <span><MdOutlineMail className="text-moku text-2xl"/></span>
            <span>hello@mokuton.com</span>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className="card bg-base-100 border border-base-200 shadow-none p-5">
        <p className="text-xl font-bold uppercase tracking-widest text-moku mb-3">
          Sosial Media
        </p>
        <div className="flex gap-2">
          <a href="https://www.instagram.com/mokutoncoffee">
            <FaInstagram className="text-moku hover:scale-120 text-4xl"/>
          </a>
          <a href="https://wa.me/628123456789">
            <IoLogoWhatsapp className="text-moku hover:scale-120 text-4xl"/>
          </a>
          <a href="https://www.tiktok.com/@mokutoncoffee">
            <IoLogoTiktok className="text-moku hover:scale-120 text-4xl"/>
          </a>
        </div>
      </div>
    </div>
  );
}
