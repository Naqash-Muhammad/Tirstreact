import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bar from './Component/Bar';
import AgainBar from './Component/AgainBar';
import BarThird from './Component/BarThird';
import SixBySix from './Component/SixBySix';
import Card from './Card/Card';
import TwoCola from "./Second6Sid/TwoCola";
import UI from './FeaturedThemes/UI';
import ButtonCard from "./ButtonWork/ButtonCard";
import CardB from "./ButtonWork/Button&Card/CardB";
import MainRouter from './ButtonWork/MainRouter';


function App() {
  return (
    <>
     <Bar />
     <AgainBar />
     <BarThird />
     <SixBySix />
     <Card />  
     <TwoCola />
     <UI />
     {/* <ButtonCard /> */}
     <MainRouter />
     
  

    </>
  );
}

export default App;
