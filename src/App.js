/*
 * Entry point of the App
 *
 */
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout ,Spin} from "antd";
import Navbar from './Components/Navbar'
import Leftbar from './Components/LeftBar'
import "./App.less";

const Dashboard = lazy(() => import("./Components/Dashboard"));

export default function App() {
  const [islayoutLeftAligned, setIslayoutLeftAligned] = useState(true);

  /*
   * Two Display Layouts
   *
   */
  const sideBarLeftLayout = (
    <Layout>
      <Leftbar />
      <Layout>
        <Navbar
          setIslayoutLeftAligned={setIslayoutLeftAligned}
          islayoutLeftAligned={islayoutLeftAligned}
        />
        <Suspense
          fallback={
            <div className="spinner__Container">
              <Spin />
            </div>
          }
        >
          <Dashboard />
        </Suspense>
      </Layout>
    </Layout>
  );

  const sideBarRightLayout = (
    <Layout>
      <Layout>
        <Navbar
          setIslayoutLeftAligned={setIslayoutLeftAligned}
          islayoutLeftAligned={islayoutLeftAligned}
        />
        <Suspense
          fallback={
            <div className="spinner__Container">
              <Spin />
            </div>
          }
        >
          <Dashboard />
        </Suspense>
      </Layout>
      <Leftbar />
    </Layout>
  );
  /*
   * 
   *
   */

  return (
    <>
      <BrowserRouter>
        {islayoutLeftAligned ? sideBarLeftLayout : sideBarRightLayout}
      </BrowserRouter>
    </>
  );
}
