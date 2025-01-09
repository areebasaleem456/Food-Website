import Productlist from "./components/productlist";
import Banner from "./components/banner";
import Offer from "./components/offer";
import Card from "./components/card";
import Homepage from "./home/page";
import Reservation from "./components/reservation";
import Contactpage from "./contact/page";
import Menuitems from "./components/menuitems";
import Menulist from "./components/menulist";



export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Banner />
      <Homepage />
      <Productlist />
      <Menuitems />
      <Menulist />
      <Offer />
      <Card />
      <Contactpage />
      <Reservation />
      
      
    </div>
  );
}
