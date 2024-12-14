import CarouselPhoto from "../component/CarouselPhoto";
import { BiMenu } from "react-icons/bi";
import { FaGooglePlay, FaYoutube, FaFacebookSquare, FaInstagramSquare, FaSteam } from "react-icons/fa";

export default function Game() {
  return (
    <>
      <section id="Navbar">
        <div className="fixed w-screen sm:px-40 z-30">
          <div className="sm:flex bg-[#21201F] px-5 py-4 justify-between hidden">
            <div className="flex gap-12 items-center">
              <a className="font-staatliches text-[#DFDFF2] text-4xl " href="/">
                pplg
              </a>
              <div className="flex gap-7">
                <button>
                  <a
                    className="font-mono font-semibold text-[#DFDFF2]"
                    href="/"
                  >
                    Games & News
                  </a>
                </button>
                <button>
                  <a
                    className="font-mono font-semibold text-[#DFDFF2]"
                    href="/"
                  >
                    About
                  </a>
                </button>
                <button>
                  <a
                    className="font-mono font-semibold text-[#DFDFF2]"
                    href="#contact"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
            <div className="flex justify-center pr-5">
              <button className="bg-[#DFDFF2] px-5">
                <a
                  className="font-mono font-semibold text-[#21201F]"
                  href="/incommodious"
                >
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

      <section id="banner">
        <div className="w-screen h-72 bg-black">
          <img src="" alt="" />
        </div>
      </section>

      <section id="image">
        <div className=" md:px-40 space-y-10 py-10 px-3">
          <div className="flex-col">
            <h1 className="font-staatliches text-lg">Barda - NOV 25,2024 </h1>
            <h1 className="font-staatliches text-5xl">Barda Demo Release</h1>
          </div>
          <div className="md:h-screen w-full h-64 bg-black">
            <img src="" alt="" />
          </div>
          <div className="md:px-64 space-y-5">
            <div className="inline-block space-y-1">
              <h1 className="font-semibold text-xl text italic text">
                Barda Realese now after a several years
              </h1>
            </div>
            <div>
              <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus, modi enim earum impedit totam consequatur commodi
                ullam aspernatur labore ea officia, nisi voluptas libero at quos
                aperiam sit molestiae fugit dicta ut, suscipit dolores molestias
                sunt veritatis! Beatae, adipisci nulla! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Impedit iste aspernatur,
                exercitationem optio a quae sapiente illum nemo. Natus esse
                accusantium quis architecto ut blanditiis laudantium maiores,
                vero consectetur assumenda.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section id="game">
        <div className="flex scale-90 justify-center">
          <iframe
            frameBorder="0"
            src="https://itch.io/embed-upload/10893715?color=333333"
            allowfullscreen=""
            width="900"
            height="550"
          >
            <a href="https://alzee23.itch.io/cima">Play Cima on itch.io</a>
          </iframe>
        </div>
      </section>

      <section>
        <div className="md:px-40 space-y-10 pb-20">
          <div className="md:px-64">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              assumenda laudantium nam quaerat et nostrum iusto cumque aut,
              vitae est laborum sed unde quae, qui possimus veritatis delectus?
              Quas vitae tenetur aperiam dolor consequuntur eligendi eum nam
              accusantium, sit itaque.
            </h1>
          </div>
          <div className="w-full h-[40%] flex justify-center">
            <div className="w-[54%]">
              <CarouselPhoto />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="md:px-40 px-3 h-80  bg-[#21201F]">
          <div className="inline-block w-full">
            <div className="mt-8">
              <h1 className="font-staatliches font-semibold text-xl text-[#FAF4ED]">
                Follow us on
              </h1>
              <div className="md:flex justify-between">
                <div className="flex items-center space-x-3">
                  <FaYoutube className="size-12 text-[#FAF4ED]" />
                  <FaFacebookSquare className="size-10 text-[#FAF4ED]" />
                  <FaInstagramSquare className="size-10 text-[#FAF4ED]" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <FaGooglePlay className="size-10 text-[#FAF4ED]" />
                    <h1 className="font-staatliches text-3xl text-[#FAF4ED]">
                      Google Play
                    </h1>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaSteam className="size-10 text-[#FAF4ED]" />
                    <h1 className="font-staatliches text-3xl text-[#FAF4ED]">
                      Steam
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-[#FAF4ED] w-full h-1 my-2"></div>
              <div className="md:flex justify-between">
                <div className="md:w-[25%] ">
                  <h1 className="font-staatliches text-[#FAF4ED]">
                    SMK Negeri 1 Ciomas Jl. Raya Laladon, Kec Ciomas Kab. Bogor,
                    Jawa Barat
                  </h1>
                  <h1 className="font-staatliches text-[#FAF4ED]">
                    phone: +62251 7520933
                  </h1>
                  <h1 className="font-staatliches text-[#FAF4ED]">
                    Email: smkn1_ciomas@yahoo.co.id
                  </h1>
                </div>
                <div>
                  <h1 className="font-staatliches text-7xl text-[#FAF4ED]">
                    PPLG
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
