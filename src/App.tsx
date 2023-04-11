import { useAtom } from "jotai";
import { useEffect } from "react";
import RoutingScreen from "./Screens/RoutingScreen";
import TopBar from "./TopBar/TopBar";
import { mobileModeSwitchAtom } from "./atoms/Atoms";

function App(): JSX.Element {
  const [, setMobileModeSwitch] = useAtom(mobileModeSwitchAtom);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setMobileModeSwitch(true);
      } else {
        setMobileModeSwitch(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setMobileModeSwitch]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex shrink">
        <TopBar />
      </div>
      <div className="flex grow">
        <RoutingScreen />
      </div>
    </div>
  );
}

export default App;