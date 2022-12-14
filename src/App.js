import './App.css';
import Client from './components/Client/Client';
import Company from './components/Company/Company';
import Feature from './components/Feature/Feature';
import Health from './components/Health/Health';
import Hero from './components/Hero/Hero';
import MostPopular from './components/MostPopular/MostPopular';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter
} from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import SmallCard from './components/SmallCard/SmallCard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Hero />
      <SmallCard />
      <MostPopular />
      <Feature />
      <Health />
      <MostPopular />
      <Client />
      <Company />
      <Blog />   
      
      <Footer />
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;
