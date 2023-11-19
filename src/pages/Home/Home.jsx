import Navbar from "./components/navbar/Navbar";
import Filter from "./components/filter/Filter";
import Cards from "./components/card/Cards";
import Payments from "./components/payments/Payments";
import Lol from "./../../assets/background/LoL.png";
function Home() {
  return (
    <div style={{backgroundColor: '#37384B'}} >
      <Navbar/>
       <div style={{
        backgroundImage: `url(${Lol})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh'
      }}>
        <Filter/>
        <Cards/>
        <Payments/>
    </div>
    
    </div>
  );
}

export default Home;