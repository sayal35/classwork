
import { Outlet } from 'react-router-dom';
import './App.css';
// import Home from './pages/home';
import Login from './pages/login';
import Footer from './components/footer';
import UserCard from './components/user_card';

function App() {
  return (
    <div className="App">
      <Outlet/>
      {/* <Footer/>  */}
      
    </div>
  );
}
export default App;
