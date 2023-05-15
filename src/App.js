import { react } from "react";
import { ReactDOM } from "react-dom/client";
import logo from './logo.svg';
import './App.css';
//custom components
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
     
//         <img src="./logo.svg" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
  
//       </header>
//     </div>
//   );
// }


function ReturnList(){

  return(
    <div>
  <h1>I want to buy the following</h1>
  <ul>
    <li>Eggs</li>
    <li>Water</li>
    <li>Milk</li>
  </ul>
  </div>
  )
}
export default ReturnList;