export default function Home() {
  return (
    <main className="flex bg-blue-300 w-[100vw] font-mono h-[100vh] flex-col items-center justify-center gap-4">
      <h1>
        SPLI <br/>
        TTER
      </h1>
      <div className="flex bg-white rounded-xl p-4">
        <div className="flex flex-col gap-2">
          <span>Bill</span>
          <div className="flex border-2 border-blue-950 p-1 w-[16.7rem] rounded-md">
            <span className="text-gray-300">$</span>
            <input placeholder="142.55" className="text-right text-blue-950 outline-none w-[100%]"/>
          </div>
          <span>Select Tip %</span>
          <ul className="flex flex-wrap w-[17rem] gap-4">
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded">10%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded">15%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded">20%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded">25%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded">50%</button></li>
            <li><input type="text" placeholder="Custom" className="bg-gray-200 outline-blue-950 text-right text-blue-950 py-1 px-2 rounded w-[5rem]"/></li>
          </ul>
          <div className="mt-6">
            <div><span>Number of People</span></div>
            <div className="flex border-2 border-blue-950 p-1 w-[16.7rem] rounded-md">
              <span className="text-gray-300">$</span>
              <input placeholder="142.55" className="text-right text-blue-950 outline-none w-[100%]"/>
            </div>
          </div>
        </div>

        <section>

        </section>
      </div>
    </main>
  );
}
