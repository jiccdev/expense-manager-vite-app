import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Main from './Main';

const Layout = () => {
  return (
    <div className="h-screen">
      {/* <div>TopNva</div> */}
      <div className="flex flex-row">
        <div className="min-h-screen flex items-start justify-center py-5 px-3 w-80 bg-gray-800 shadow-md border-gray-700 md:hidden">
          <Navbar />
        </div>
        <div className="w-full p-5 h-screen overflow-scroll bg-slate-100">
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
