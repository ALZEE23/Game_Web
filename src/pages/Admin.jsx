import Sidebar from "../component/Sidebar";
import ChartCurve from "../component/ChartCurve";
import ChartDonut from "../component/ChartDonut";
import ChartSemi from "../component/ChartSemi";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <section id="Dashboard">
        <div className="bg-[#21201F] w-screen h-screen absolute top-3/4"></div>
        <div className="flex px-24 py-36 gap-5">
          <ChartCurve></ChartCurve>
          <ChartDonut></ChartDonut>
          <ChartSemi></ChartSemi>
        </div>
      </section>
      <section id="Form">
        <div className="">
            
        </div>
      </section>
    </>
  );
}
