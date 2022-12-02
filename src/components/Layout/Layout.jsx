import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Layout.css';

const Layout = () => {
    return (
        <div className="App">
          <NavBar />
          <div className="page">
    
            <Outlet />
           
          </div>
        </div>
      )
    }

export default Layout