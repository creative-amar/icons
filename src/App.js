import './App.scss';
import {  documentIcon,  searchIcon, viewDocIcon, extractIcon, extractDataIcon, fillTableIcon, graphIcon, compareDoc,  } from "./icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <span className="icon">
         {documentIcon}
       </span>
       <span className="icon">
         {searchIcon}
       </span>
       <span className="icon">
         {viewDocIcon}
       </span>
       <span className="icon">
         {extractIcon}
       </span>
       <span className="icon">
         {extractDataIcon}
       </span>
       <span className="icon">
         {fillTableIcon}
       </span>
       <span className="icon">
         {graphIcon}
       </span>
       <span className="icon">
         {compareDoc}
       </span>
      </header>
    </div>
  );
}

export default App;
