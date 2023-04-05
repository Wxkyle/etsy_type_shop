import MainScreen from "./Screens/MainScreen";
import TopBar from "./TopBar/TopBar";


function App() {



  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex shrink">
        <TopBar />
      </div>
      <div className=" flex grow">
        <MainScreen />
      </div>
    </div>
  );
}

export default App;