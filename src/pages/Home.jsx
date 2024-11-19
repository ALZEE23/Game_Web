import Navbar from "../component/Navbar";
import teaser from "../assets/Untitled (3840 x 2160 px).mp4";

export default function Home() {
  return (
    <>
      {/* Section HOME */}
      <section id="home">
        <div className="relative -z-10 bg-[#FAF4ED] w-full h-screen sm:w-screen sm:h-screen">
          <video
            src={teaser}
            autoPlay
            loop
            muted
            crossOrigin="anonymous"
            className="absolute object-cover w-full h-full top-0 left-0"
          ></video>
        </div>
        <div className="absolute top-0">
          <Navbar />

          <div className="w-screen h-screen md:block pt-40 justify-between flex flex-col md:justify-normal md:space-y-72">
            <div className="md:space-y-8">
              <div className="px-10 md:h-40">
                <h1 className="font-staatliches font-bold md:text-10xl text-6xl  text-left text-[#DFDFF2] tracking-tighter">
                  INCOMMODIOUS
                </h1>
              </div>
              <div className="px-10 h-40">
                <h1 className="font-staatliches font-bold md:text-7xl text-3xl  text-left text-[#DFDFF2] tracking-tighter">
                  STUDIO
                </h1>
              </div>
            </div>

            <div className=" md:h-40 h-fit  w-fit md:float-end float-end md:mb-0 mb-0 content-center">
              <h1 className="font-staatliches font-bold md:text-10xl text-6xl text-center bg-[#FAF4ED] md:w-[40rem] w-full  text-[#21201F] tracking-tighter">
                STUDIO
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section ABOUT */}
      <section id="about">
        {/* Section Mobile */}
        <div className="w-screen h-screen bg-[#FAF4ED] md:hidden inline-block md:mb-0 mb-10">
          <div className="flex">
            <div className="md:w-20 w-3 h-[70vh] mx-10 mt-20 bg-[#21201F]"></div>
            <div className="w-full  py-20 inline-block">
              <h1 className="md:text-8xl text-4xl text-[#FAF4ED] px-10 py-1 font-staatliches font-semibold w-fit tracking-tighter bg-[#21201F]">
                Meet The Team
              </h1>
            </div>
          </div>

          <div className="md:w-[50rem] mt-10 mx-10 bg-[#21201F] space-y-24 inline-block pb-20">
            <h1 className="font-mono tracking-tighter font-semibold text-[#DFDFF2] text-center md:text-5xl mt-16">
              ABOUT
            </h1>
            <h1 className="font-mono font-semibold md:text-3xl mx-7 text-justify text-[#DFDFF2] tracking-tighter">
              Incommodious Studio comes from two Game Jam teams that met at the
              Global Game Jam Bogor in 2023, namely the cai team & the carrot
              team, after studying game development for a year, and unexpectedly
              meeting at the compfest game jam, we finally decided to become
              Incommodious Studio in 2024.{" "}
            </h1>
          </div>
          <div className="md:w-20 w-[0.70rem] h-[14vh] mx-10 mt-10 bg-[#21201F]"></div>
        </div>

        {/* Section Desktop */}
        <div className="w-screen h-screen bg-[#FAF4ED] md:flex hidden">
          <div className="md:w-20 w-3 h-screen mx-10 mt-20 bg-[#21201F]"></div>
          <div className="w-full px-10 py-20 inline-block">
            <h1 className="md:text-8xl text-[#FAF4ED] px-10 py-1 font-staatliches font-semibold w-fit tracking-tighter bg-[#21201F]">
              Meet The Team
            </h1>
          </div>
          <div className="md:w-[50rem] mt-20 mx-10 bg-[#21201F] space-y-24 inline-block">
            <h1 className="font-mono tracking-tighter font-semibold text-[#DFDFF2] text-center md:text-5xl mt-16">
              ABOUT
            </h1>
            <h1 className="font-mono font-semibold md:text-3xl mx-7 text-justify text-[#DFDFF2] tracking-tighter">
              Incommodious Studio comes from two Game Jam teams that met at the
              Global Game Jam Bogor in 2023, namely the cai team & the carrot
              team, after studying game development for a year, and unexpectedly
              meeting at the compfest game jam, we finally decided to become
              Incommodious Studio in 2024.{" "}
            </h1>
          </div>
        </div>
      </section>

      {/* Section CARD */}
      <section>
        <div className="w-full md:h-[30rem] h-24 bg-[#B0B0B0] md:mt-0 mt-60">
          <h1 className="font-staatliches text-8xl md:text-11xl md:mx-0 mx-9 text-[#21201F]">
            G<span className="bg-[#FAF4ED]">AMING</span>
          </h1>
        </div>
      </section>

      {/* Section GAME */}
      <section id="game">
        <div className="w-screen inline-block px-64 bg-[#21201F] py-36 space-y-16">
          <div className="w-full h-[40rem] bg-[#EDFF66]"></div>
          <div className="flex space-x-16">
            <div className="h-[56rem] w-[50%] bg-[#EDFF66]"></div>
            <div className="h-[56rem] w-[50%] inline-block space-y-16">
              <div className="w-full h-[47%] bg-[#EDFF66]"></div>
              <div className="w-full h-[46%] bg-[#EDFF66]"></div>
            </div>
          </div>
          <div className="flex space-x-16 h-[56rem]">
            <div className="w-full h-[47%] bg-[#EDFF66]"></div>
            <div className="w-full h-[47%] bg-[#EDFF66]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
