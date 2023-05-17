

import { AllRoutes } from "./routes/AllRoutes";
import './App.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      <main>
      <AllRoutes />
      </main>
     
      <Footer/>
    </div>
  );
}

export default App;
