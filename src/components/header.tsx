import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-moku relative z-9999">
      <div className="flex justify-center items-center pt-4 pr-5 pb-4">
        {/* Tengah — Logo */}
        <Link to="/">
          <img
            className="btn btn-link w-40 h-full"
            src="/images/logo-moku.png"
          />
        </Link>
      </div>
    </div>
  );
}
