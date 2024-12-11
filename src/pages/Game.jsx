import CarouselPhoto from "../component/CarouselPhoto";

export default function Game() {
  return (
    <>
      {/* Section Banner*/}
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
          <div className="md:px-64">
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
                sunt veritatis! Beatae, adipisci nulla!
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
        <div>
          <h1></h1>
        </div>
        <div className="w-full h-[50%] flex justify-center">
          <div className="w-">
            <CarouselPhoto />
          </div>
        </div>
      </section>
    </>
  );
}
