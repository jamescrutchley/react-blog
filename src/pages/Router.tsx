import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "feed",
    element: (
      <Layout>
        <Feed />
      </Layout>
    ),
  },
  {
    path: "profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
]);
  
export default router;