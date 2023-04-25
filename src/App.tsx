import MainBody from "./components/mainBody/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainBody />
    </div>
  );
}

export default App;
