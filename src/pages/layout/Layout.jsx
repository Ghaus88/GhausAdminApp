import { Outlet } from 'react-router-dom';

const Layout = () => {
  return <div className="children">{<Outlet />}</div>;
};

export default Layout;
