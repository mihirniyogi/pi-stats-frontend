import Header from "./components/Header";
import Divider from "./components/Divider";
import SystemInfo from "./components/SystemInfo";
import CpuInfo from "./components/CpuInfo";
import MemInfo from "./components/MemInfo";

const border = 0;

function App() {
  return (
    // Entire screen
    <div className={`flex min-h-screen bg-background`}>
      {/* Entire screen with x-margins */}
      <div
        className={`flex flex-col min-h-full w-full 
          mx-4 
          sm:mx-6 
          md:mx-8 
          lg:mx-10
        ${border ? "border border-white" : ""}`}
      >
        <Header />

        <Divider />

        <div className="flex flex-col md:flex-row">
          <div className={`flex-1 mt-4 space-y-4 md:mr-4`}>
            <SystemInfo />
            <MemInfo />
          </div>

          <div className={`flex-1 mt-4 space-y-4 md:ml-4`}>
            <CpuInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
