export default function Sidebar() {
  return (
    <>
      <div className="flex w-screen justify-between bg-[#21201F] px-12 py-6">
        <div className="flex space-x-4">
          <div className="bg-[#DFDFF2] w-10 h-10"></div>
          <div className="flex-col flex">
            <h1 className="font-mono font-semibold text-[#DFDFF2]">
              GIM Dashboard
            </h1>
            <h1 className="font-mono text-[#DFDFF2] text-sm">Welcome, Admin</h1>
          </div>
          <div></div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="bg-[#DFDFF2] w-8 h-8"></div>
          <div className="flex-col flex">
            <h1 className="font-mono font-semibold text-[#DFDFF2] text-sm">
              Muhamad Alfarizi
            </h1>
            <h1 className="font-mono text-[#DFDFF2] text-xs">Admin</h1>
          </div>
        </div>
      </div>
    </>
  );
}
