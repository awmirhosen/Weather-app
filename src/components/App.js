import React from "react";
import {Provider} from 'react-redux'
import Weather from './Weather'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Weather />
    </div>
    </Provider>
  );
}

export default App;
