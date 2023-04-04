import MainScreen from "./Screens/MainScreen";
import TopBar from "./TopBar/TopBar";


function App() {



  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50">
      <div>
        <TopBar />
      </div>
      <div>
        <MainScreen />
      </div>
    </div>
  );
}

export default App;