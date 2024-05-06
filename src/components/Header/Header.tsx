import HeaderCenter from './HeaderCenter'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <div className="padding">
      <HeaderTop />
      <HeaderCenter />
    </div>
  );
}

export default Header