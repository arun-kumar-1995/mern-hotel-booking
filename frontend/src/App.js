import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loader from "./components/Loader";
import AppRoutes from "./routes/AppRoutes";
import AppLayout from "./layouts/AppLayout";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {AppRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <AppLayout>
                    <route.element />
                  </AppLayout>
                }
              />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default App;
