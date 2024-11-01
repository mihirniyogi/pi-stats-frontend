import Header from "./components/Header";
import Divider from "./components/Divider";
import SystemInfo from "./components/SystemInfo";
import CpuInfo from "./components/CpuInfo";

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

        <SystemInfo />

        <CpuInfo />
      </div>
    </div>
  );
}

export default App;
