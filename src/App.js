import "./App.css";
import { Folder } from "./components/Folders";
import { folderdata } from "./data/folderData";

function App() {
  return (
    <div className="App">
      <Folder folderData={folderdata}></Folder>
    </div>
  );
}

export default App;
