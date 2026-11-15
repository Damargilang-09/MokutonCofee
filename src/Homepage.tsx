import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(./images/hero-moku.jpeg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  md:text-4xl font-bold">
                "Great moments deserve great coffee. Your great cup starts
                here."
              </h1>
              <button className="py-2 px-2 rounded-box text-md border hover:bg-emerald-900">
                <Link to="/AboutUs">Our Story</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/images/teras-bapak.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl md:text-4xl font-bold">
                "Good coffee has a beginning. It starts with a bean."
              </h1>
              <button className="py-2 px-2 rounded-box text-md border hover:bg-emerald-900">
                <Link to="/ShopCoffee">Get Yours</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(./images/moku-mid-01.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  md:text-4xl font-bold">
                "Plant the seeds of your ideas today and watch them grow into
                knowledge, clarity, and inspiration tomorrow."
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/images/moku-hero-3.png)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl md:text-4xl font-bold">
                "Great coffee begins with careful handling"
              </h1>
              <button className="py-2 px-2 rounded-box text-md border hover:bg-emerald-900">
                <Link to="/MeetOurTeam">Our Crew</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
