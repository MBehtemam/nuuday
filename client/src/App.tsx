import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as RootRouter } from "react-router-dom";
import Store from "./logic/Store";
import Router from "./Router";
import Container from "./components/Layout/Container";
import Navbar from "./components/Navbar";
import NavbarBrand from "./components/NavbarBrand";

const store = Store();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootRouter>
        <Container direction="column">
          <Navbar>
            <NavbarBrand text="youSee" path="/" />
          </Navbar>
          <Router />
        </Container>
      </RootRouter>
    </Provider>
  );
};

export default App;
