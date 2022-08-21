import React from "react";
import Routing from "../src/Route";
import LatitudeProvider from "./Context/latitude";
function App() {
  return (
    <div className=" bg-gradient-to-b from-purple-500 to-purple-200 pb-20">
      <LatitudeProvider>
        <Routing />
      </LatitudeProvider>
    </div>
  );
}

export default App;
