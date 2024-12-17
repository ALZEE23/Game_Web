import { useState } from "react";
import Sidebar from "../component/Sidebar";
import ChartCurve from "../component/ChartCurve";
import ChartDonut from "../component/ChartDonut";
import ChartSemi from "../component/ChartSemi";
import Table from "../component/Table";
import { postApk } from "../api/ApkPost";

export default function Admin() {
  const [name, setName] = useState("");
  const [cover, setCover] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [footage, setFootage] = useState(null);
  const [game, setGame] = useState("");

  const handleApk = async (e) => {
    e.preventDefault();
    try {
      const response = await postApk(
        name,
        cover,
        title,
        description,
        game,
        footage
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Sidebar />
      <section id="Dashboard">
        <div className="bg-[#21201F] w-screen h-screen absolute top-3/4 -z-10"></div>
        <div className="px-24 py-36 w-screen">
          <div className="flex gap-5 mx-auto justify-center">
            <ChartCurve></ChartCurve>
            <ChartDonut></ChartDonut>
            <ChartSemi></ChartSemi>
          </div>
        </div>
      </section>
      <section id="Form">
        <div className="px-24 bg-[#21201F] z-10 space-y-6">
          <div className="flex space-x-4">
            <div className="bg-[#DFDFF2] size-16"></div>
            <div className="flex-col">
              <h1 className="text-[#DFDFF2]  text-3xl font-semibold font-mono text z-30 tracking-tighter">
                Form Input
              </h1>
              <h1 className="text-[#DFDFF2] text-base font-mono">
                Dynamic Frontend
              </h1>
            </div>
          </div>
          <div>
            <form onSubmit={handleApk} className="flex gap-5">
              <div className="w-[60%] bg-[#e7e7e7] h-[30rem]  z-10 px-4 py-3">
                <h1 className="text-[#21201F] text-lg font-mono font-bold">
                  News & Games
                </h1>
                <div className="w-full bg-[#21201F] h-1"></div>
                <div className="inline-block w-full space-y-5 py-4">
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold self-center">
                      Name news or games
                    </h1>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold self-center">
                      Title
                    </h1>
                    <input
                      type="text"
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                      id="title"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold self-center">
                      Game
                    </h1>
                    <input
                      type="text"
                      name="game"
                      onChange={(e) => setGame(e.target.value)}
                      id="game"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold ">Description</h1>
                    <textarea
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      type="text"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono h-40"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[40%] bg-[#e7e7e7] h-[30rem] z-10 px-4 py-3">
                <h1 className="text-[#21201F] text-lg font-mono font-bold">
                  +
                </h1>
                <div className="w-full bg-[#21201F] h-1"></div>
                <div className="inline-block w-full space-y-5 py-4">
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold">Cover</h1>
                    <input
                      name="cover"
                      onChange={(e) => setCover(e.target.files[0])}
                      id="cover"
                      type="file"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono h-40"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full justify-between">
                    <h1 className="font-mono font-semibold ">Footage</h1>
                    <input
                      name="footage"
                      onChange={(e) => setFootage(e.target.files[0])}
                      id="footage"
                      type="file"
                      className="outline-none w-[100%] bg-[#21201F] p-2 text-[#e7e7e7] font-mono h-40"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full justify-between">
                    <div></div>
                    <button
                      type="submit"
                      className="bg-[#21201F] w-24 h-9 font-mono font-semibold text-[#e7e7e7]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="h-screen pb-10">
            <Table></Table>
          </div>
        </div>
      </section>
    </>
  );
}
