import Header from "./components/Header";
import Divider from "./components/Divider";
import SysInfo from "./components/Info/SysInfo";
import CpuInfo from "./components/Info/CpuInfo";
import MemInfo from "./components/Info/MemInfo";
import DiskInfo from "./components/Info/DiskInfo";
import SvcInfo from "./components/Info/SvcInfo";

function App() {
  return (
    // Entire screen
    <div className={`flex min-h-screen bg-background`}>
      {/* Entire screen with x-margins */}
      <div
        className={`flex flex-col min-h-full w-full mb-12
          mx-4 
          sm:mx-6 
          md:mx-8 
          lg:mx-10`}
      >
        <Header />

        <Divider />

        <div className="flex flex-col md:flex-row">
          <div
            className={`flex-1 
            mt-4 space-y-4 md:mr-4
            sm:mt-6 sm:space-y-6 
            md:mt-8 md:space-y-8`}
          >
            <SysInfo />
            <MemInfo />

            {/* Services Stats [on md: screens and above] */}
            <div className="hidden mt-4 md:block sm:mt-6 md:mt-8">
              <SvcInfo />
            </div>
          </div>

          <div
            className={`flex-1 
            mt-4 space-y-4 md:ml-4
            sm:mt-6 sm:space-y-6 
            md:mt-8 md:space-y-8`}
          >
            <CpuInfo />
            <DiskInfo />
          </div>
        </div>

        {/* Services Stats [On Mobile] */}
        <div
          className={`block md:hidden
          mt-4
          sm:mt-6
          md:mt-8
          `}
        >
          <SvcInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
