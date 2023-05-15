import { react } from "react";
import { ReactDOM } from "react-dom/client";
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import MainContent from "./MainContent";
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
      <Header />
      <MainContent />
      <Footer />
  </div>
  )
}
export default ReturnList;