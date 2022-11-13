import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRoute from './routes/AllRoute';
// import OfferPage from './components/OfferPage';
import Offers from './routes/Offers';

function App() {
  return (
   <>
    <Offers/>
    <Navbar/>
    <AllRoute/>
    <Footer/>
   </>
  );
}

export default App;
