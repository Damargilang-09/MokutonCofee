import { useEffect, useState } from "react";
import MokuStart from "../../features/AboutUsPage/component/Images-01";
import MokuMid from "../../features/AboutUsPage/component/images-02";
import MokuNow from "../../features/AboutUsPage/component/images-03";

export default function AboutUsPage() {
  const [ismobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center mt-20 md:mt-10">
          <h1 className="font-bold text-[32px]">
            "WE ARE NOT A COFFEE ADDICT. JUST A LITTLE OVER ATTACHED TO IT"
          </h1>
        </div>
        <div className="flex flex-col-2 md:pt-20 md:px-40">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start self-start md:text-end"
                style={
                  !ismobile
                    ? { textAlignLast: "right", textAlign: "justify" }
                    : {}
                }
              >
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-black text-moku">
                  First step for Mokuton
                </div>
                It all started with a simple setup, a big dream, and a whole lot
                of coffee. What began as a modest corner with basic equipment
                slowly grew into something real. We got our own machine, built
                our own rhythm, and started becoming who we are. Then the world
                paused. Covid hit, and like everyone, we struggled. But we held
                on, because great coffee doesn't quit.
              </div>
              <div className="timeline-end ">
                <div>
                  <MokuStart />
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end">
                <MokuMid />
              </div>
              <div
                className="timeline-end self-start md:mb-10"
                style={{ textAlignLast: "left", textAlign: "justify" }}
              >
                <time className="font-mono italic ">2023</time>
                <div className="text-lg font-black text-moku">
                  Reborn. Refreshed. Rebrewed
                </div>
                A new address. A bigger space. A fresh start. In 2023, Mokuton
                moved into a new home; brighter, roomier, and ready for more. We
                brought everything we learned and left behind nothing that
                mattered. New faces found us, regulars followed us, and the
                energy picked right back up. Same coffee. Same soul. More room
                for you.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start self-start"
                style={
                  !ismobile
                    ? { textAlignLast: "right", textAlign: "justify" }
                    : {}
                }
              >
                <time className="font-mono italic ">2026</time>
                <div className="text-lg font-black text-moku">
                  A New Look, The Same Great Coffee
                </div>
                We didn't change what works, we just made it look how it always
                felt. In 2026, Mokuton went through a full refresh: new layout,
                a whole new look and feel. Every corner rethought, every detail
                considered. But walk in and take a sip, you'll know you're home.
                The coffee? Still the same. Still yours.
              </div>
              <div className="timeline-end">
                <MokuNow />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center px-20 py-10">
          <div className="card card-side bg-base-100 shadow-sm mt-20">
            <figure>
              <img
                className="w-50 md:w-80"
                src="/images/owner-moku.JPG"
                alt="Movie"
              />
            </figure>
            <div className="card-body ">
              <div>
                <h2 className="card-title md:text-2xl text-moku">
                  NICKO ALFIAN
                </h2>
                <span className="text-stone-400 text-sm">Founder/Roaster</span>
              </div>
              <p className="w-50">
                "mokuton itu nama jurus yang dimiliki karakter hasirama di anime naruto, gue namain tempat
                ini mokuton karna gue ingin tempat ini terus tumbuh dan
                berkembang seperti jurus hasirama yang menumbuhkan pohon besar "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
