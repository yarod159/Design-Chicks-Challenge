import Navbar from "./components/navbar/Navbar";
import Filter from "./components/filter/Filter";
import Card from "./components/card/Card";
import Lol from "./../../assets/background/LoL.png";
function Home() {
  return (
    <div>
      <Navbar/>
      <div style={{
        backgroundImage: `url(${Lol})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
      }}>
        <Filter/>
        <Card/>
      </div>
    </div>
  );
}

export default Home;