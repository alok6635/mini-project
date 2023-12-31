import "./App.css";
import Dropdown from "./Component/Dropdown";

function App(){
  // dropdown menu items
const options=["Html", "Css", "Angular", "React"];
return (
  <div className="App">
    {/* heading */}
    <h3>Choose programming Language</h3>
    {/* passing options as props to dropdown component */}
    <Dropdown options={options}/>
    
  </div>
);
}

export default App;