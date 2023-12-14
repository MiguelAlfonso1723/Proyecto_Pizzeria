import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

//components

import Sidebar from "./components/shared/Sidebar";
import Card from "./components/shared/Card";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () =>{
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/*menú movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl rounded-tl-xl rounded-tr-xl text-gray-400 py-2 px-8 flex items-center justify-between">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
        
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/*Header*/}
          <Header />
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Selecciona el plato</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/*Content*/}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 ">
            {/*Card*/}
            
            {/*Card*/}
            <Card img="PizzaGrande.png" description="Pizza Grande" price="40,000" persons="8 personas" />
            {/*Card*/}
            <Card img="PizzaMediana.png" description="Pizza Mediana" price="27,000" persons="4 personas" />
            {/*Card*/}
            <Card img="PizzaPequena.png" description="Pizza Pequeña" price="18,000" persons="2 personas" />
            {/*Card*/}
            <Card img="PizzaPorcion.png" description="Pizza Porción" price="7,000" persons="1 personas" />
            
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
