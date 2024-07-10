export default function Home() {
  return (
    <main className="flex bg-blue-300 w-[100vw] font-mono h-[100vh] flex-col items-center justify-center gap-4">
      <h1>
        SPLI <br/>
        TTER
      </h1>
      <div className="flex bg-white rounded-xl p-4 gap-8">
        <div className="flex flex-col gap-2">
          <span>Bill</span>
          <div className="flex border-2 border-blue-950 p-1 w-[16.7rem] rounded-md">
            <span className="text-gray-300">$</span>
            <input type="number" placeholder="0" className="text-right text-blue-950 outline-none w-[100%] placeholder-blue-200"/>
          </div>
          <span>Select Tip %</span>
          <ul className="flex flex-wrap w-[17rem] gap-4">
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded hover:bg-blue-300">10%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded hover:bg-blue-300">15%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded hover:bg-blue-300">20%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded hover:bg-blue-300">25%</button></li>
            <li><button className="bg-blue-950 text-white w-[4.9rem] py-1 rounded hover:bg-blue-300">50%</button></li>
            <li><input type="number" placeholder="Custom" className="bg-gray-200 outline-blue-950 text-right text-blue-950 py-1 rounded w-[5rem] placeholder-blue-200"/></li>
          </ul>
          <div className="mt-6">
            <div><span>Number of People</span></div>
            <div className="flex border-2 border-blue-950 p-1 w-[16.7rem] rounded-md">
              <span className="text-gray-300">$</span>
              <input type="number" placeholder="0" className="text-right text-blue-950 outline-none w-[100%] placeholder-blue-200 font-extrabold text-sm"/>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-between bg-blue-950 rounded-xl py-2 px-4">
          <div>
            <div className="flex justify-between gap-8">
              <div className="flex flex-col">
                <span className="text-white">Tip Amount</span>
                <span className="text-blue-800">/ person</span>
              </div>
              <span className="font-extrabold text-3xl text-blue-900 text-right">$0.00</span>
            </div>
            <div className="flex justify-between gap-8">
              <div className="flex flex-col">
                <span className="text-white">Total</span>
                <span className="text-blue-800">/ person</span>
              </div>
              <span className="font-extrabold text-3xl text-blue-900">$0.00</span>
            </div>
          </div>
          <button className="w-[100%] bg-blue-900 rounded p-1 hover:bg-blue-300 font-extrabold">RESET</button>
        </section>
      </div>
    </main>
  );
}
