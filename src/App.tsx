import React from "react";
import FetchUserData from "./materi/1-Fetch-Data/FetchUserData";
import {
  MapStateExample,
  ObjectStateExample,
} from "./materi/2-Map/MapStateExample";

const App: React.FC = () => {
  return (
    <div>
      <h1>App</h1>
      <FetchUserData />
      <MapStateExample />
      <ObjectStateExample />
    </div>
  );
};

export default App;
