import React from "react";
import Routing from "../src/Route";
import DataCurrentProvider from "./Context/DataCurrent";
import LatitudeProvider from "./Context/latitude";
function App() {
  return (
    <div className=" bg-gradient-to-b from-purple-500 to-purple-200 pb-20">
      <DataCurrentProvider>
        <LatitudeProvider>
          <Routing />
        </LatitudeProvider>
      </DataCurrentProvider>
    </div>
  );
}

export default App;
