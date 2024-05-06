import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
  return (
      <div className='flex flex-col h-screen'>
          <Header />
          <Outlet />
          <Footer/>
    </div>
  )
}

export default MainLayouts