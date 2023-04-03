import MainScreen from "./Screens/MainScreen";
import TopBar from "./TopBar/TopBar";


function App() {



  return (
    <div className="min-h-screen flex justify-center items-center bg-green-400">
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