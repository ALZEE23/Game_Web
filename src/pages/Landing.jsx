import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGooglePlay,
  FaSteam,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

export default function Landing() {
  return (
    <>
      <section id="Navbar">
        <div className="fixed w-screen sm:px-40 z-30">
          <div className="sm:flex bg-[#21201F] px-5 py-4 justify-between hidden">
            <div className="flex gap-12 items-center">
              <a className="font-staatliches text-[#DFDFF2] text-4xl " href="#header">
                pplg
              </a>
              <div className="flex gap-7">
                <button>
                  <a className="font-mono font-semibold text-[#DFDFF2]" href="#game">
                    Games & News
                  </a>
                </button>
                <button>
                  <a className="font-mono font-semibold text-[#DFDFF2]" href="#about">
                    About
                  </a>
                </button>
                <button>
                  <a className="font-mono font-semibold text-[#DFDFF2]" href="#contact">
                    Contact
                  </a>
                </button>
              </div>
            </div>
            <div className="flex justify-center pr-5">
              <button className="bg-[#DFDFF2] px-5">
                <a className="font-mono font-semibold text-[#21201F]" href="/incommodious">
                  Interested
                </a>
              </button>
            </div>
          </div>
          <div className="sm:hidden bg-[#21201F] px-5 py-4 justify-between flex">
            <div className="flex gap-12 items-center">
              <h1 className="font-staatliches text-[#DFDFF2] text-4xl ">
                pplg
              </h1>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#DFDFF2] px-5">
                <BiMenu className="font-semibold text-xl text-[#21201F]"></BiMenu>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="header">
        <div className="relative">
          <div className="absolute -right-32 scale-150 top-[33rem] hidden md:block -z-10">
            <div className="size-64 rotate-45 pt-9 pl-9 bg-[#21201F]"></div>
          </div>
          <div className="absolute -left-32 scale-150 top-[33rem] hidden md:block -z-10">
            <div className="size-64 rotate-45 pt-9 pl-9 bg-[#21201F]"></div>
          </div>
          <div className="items-center w-screen flex-col flex h-[85vh] justify-center pb-30 gap-5">
            <h1 className="text-7xl  font-staatliches">PPLG</h1>
            <h1 className="w-96 font-mono font-semibold text-xl text-center">
              Makers of Barda, Rumble Academia, Rupapa Cooking, Expiation & The
              Dukuns
            </h1>
          </div>
        </div>
      </section>
      <section id="game">
        <div className="relative ">
          <div className="sm:grid-cols-2 gap-8 grid sm:px-40 px-5 w-screen mb-56 ">
            <div className="bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto">
              <div className="w-full h-[15rem] sm:h-[26rem] bg-black"></div>
              <div className="">
                <h1 className="font-mono font-semibold text-center">Lorem</h1>
                <h1 className="text-center font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  necessitatibus porro cupiditate.
                </h1>
              </div>
            </div>
            <div className="bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto">
              <div className="w-full h-[15rem] sm:h-[26rem] bg-black"></div>
              <div className="">
                <h1 className="font-mono font-semibold text-center">Lorem</h1>
                <h1 className="text-center font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  necessitatibus porro cupiditate.
                </h1>
              </div>
            </div>
            <div className="bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto">
              <div className="w-full h-[15rem] sm:h-[26rem] bg-black"></div>
              <div className="">
                <h1 className="font-mono font-semibold text-center">Lorem</h1>
                <h1 className="text-center font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  necessitatibus porro cupiditate.
                </h1>
              </div>
            </div>
            <div className="bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto">
              <div className="w-full h-[15rem] sm:h-[26rem] bg-black"></div>

              <div className="">
                <h1 className="font-mono font-semibold text-center">Lorem</h1>
                <h1 className="text-center font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  necessitatibus porro cupiditate.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="bg-[#21201F] relative  md:px-40 md:p-10 px-3 md:pb-32 py-10">
          <div className="absolute right-[7.7rem] top-28 hidden md:block">
            <div className="size-64 rotate-45 pt-9 pl-9 bg-[#FAF4ED]">
              <div className="size-[11.5rem] bg-[#21201F] rotate-45">
                <div className=""></div>
              </div>
            </div>
          </div>
          <h1 className="font-staatliches text-3xl px-2 text-[#FAF4ED]">
            about
          </h1>
          <h1 className="font-semibold font-staatliches md:text-10xl text-mxl tracking-tight text-[#FAF4ED]">
            PPLG
          </h1>
          <div className="md:pr-96 ">
            <h1 className="font-mono font-semibold text-2xl  inline bg-[#FAF4ED] text-black px-1 rounded-sm">
              Our dream is to create games that as many people as possible play
              for years and that are remembered forever.
            </h1>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="md:px-40 px-3 h-80 bg-[#FAF4ED]">
          <div className="inline-block w-full">
            <div className="mt-8">
              <h1 className="font-staatliches font-semibold text-xl text-[#21201F]">
                Follow us on
              </h1>
              <div className="md:flex justify-between">
                <div className="flex items-center space-x-3">
                  <FaYoutube className="size-12 text-[#21201F]" />
                  <FaFacebookSquare className="size-10 text-[#21201F]" />
                  <FaInstagramSquare className="size-10 text-[#21201F]" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <FaGooglePlay className="size-10 text-[#21201F]" />
                    <h1 className="font-staatliches text-3xl text-[#21201F]">
                      Google Play
                    </h1>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaSteam className="size-10 text-[#21201F]" />
                    <h1 className="font-staatliches text-3xl text-[#21201F]">
                      Steam
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-[#21201F] w-full h-1 my-2"></div>
              <div className="md:flex justify-between">
                <div className="md:w-[25%] ">
                  <h1 className="font-staatliches">
                    SMK Negeri 1 Ciomas Jl. Raya Laladon, Kec Ciomas Kab. Bogor,
                    Jawa Barat
                  </h1>
                  <h1 className="font-staatliches">phone: +62251 7520933</h1>
                  <h1 className="font-staatliches">
                    Email: smkn1_ciomas@yahoo.co.id
                  </h1>
                </div>
                <div>
                  <h1 className="font-staatliches text-7xl">PPLG</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
