import { Outlet, Link } from "react-router-dom";

import Category from "../../components/category/category.component";

const Home = () => {

  return (
    <div>
      <Outlet />
      <Category />
    </div>
  );
};

export default Home;
