//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';  
 import Hero from './components/Hero/Hero';
 import Card from './components/Card/Card';
 import API from './utilapi/constants';
 import AlbumContain from './components/AlbumContain/AlbumContain';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
   {/* <Card
   
   image="https://dummyimage.com/345x140/cccccc/000000"
   follows="1000"
   albumName="New Bollywood"
   /> */}

   <AlbumContain apiurl={API.top_album} title="Top Albums"/>
   <AlbumContain apiurl={API.new_album} title="New Albums" />
    </div>
  );
}

export default App;
