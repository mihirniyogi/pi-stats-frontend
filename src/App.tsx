import Header from "./components/Header";
import Divider from "./components/Divider";
import SysInfo from "./components/SysInfo";
import CpuInfo from "./components/CpuInfo";
import MemInfo from "./components/MemInfo";
import DiskInfo from "./components/DiskInfo";
import SvcInfo from "./components/SvcInfo";
import { SysInfoData } from "./utils/ApiInterfaces";
import axios from "axios";
import { useEffect, useState } from "react";

interface AppData {
  sys: SysInfoData | null;
}

const FETCH_INTERVAL = 20000;

function App() {
  const [data, setData] = useState<AppData>({
    sys: null,
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const BASE_URL = import.meta.env.VITE_BACKEND_URL;
        const [sysRes] = await Promise.all([
          axios.get<SysInfoData>(BASE_URL + "gen/"),
        ]);

        setData({
          sys: sysRes.data,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    // when component first renders, fetch data
    fetchData();

    // after render, every FETCH_INTERVAL ms, fetch data
    const interval = setInterval(fetchData, FETCH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
