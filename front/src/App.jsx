import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './components/Pizza';
import Home from './components/Home';
import { From } from './From';
import Navbar1  from './components/Navbar1';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar1 />
       {/*<Home />*/}
      <hr />
      <Pizza />
      {/*<From />*/}
      <Footer />
    </>
  );
}

export default App;
