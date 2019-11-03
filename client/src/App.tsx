import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as RootRouter } from "react-router-dom";
import Store from "./logic/Store";
import Router from "./Router";

const store = Store();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootRouter>
        <Router />
      </RootRouter>
    </Provider>
  );
};

export default App;
