import React from "react";
import FetchUserData from "./materi/1-Fetch-Data/FetchUserData";
import {
  MapStateExample,
  ObjectStateExample,
} from "./materi/2-Map/MapStateExample";
import Counter from "./materi/3-Custom-Hook/Counter/Counter";
import { IncorrectFormHandling } from "./materi/4-Form/IncorrectFormHandling";
import { CorrectFormHandling } from "./materi/4-Form/CorrectFormHandling";
import { ControlledForm } from "./materi/5-Controlled-&-Uncontrolled-Component/ControlledComponent";
import { UncontrolledForm } from "./materi/5-Controlled-&-Uncontrolled-Component/UncontrolledComponent";
import CounterReducer from "./materi/6-useReducer/CounterReducer";

import { UserProvider } from "./materi/7-useContext/context/UserProvider";
import Dashboard from "./materi/7-useContext/Dashboard";

import Posts from "./materi/8-ReactQuery/Posts";

const App: React.FC = () => {
  return (
    <div>
      <UserProvider>
        <h1>App</h1>
        <FetchUserData />
        <MapStateExample />
        <ObjectStateExample />
        <Counter />
        <IncorrectFormHandling />
        <CorrectFormHandling />

        <ControlledForm />
        <UncontrolledForm />

        <CounterReducer />

        <h1>Use Context</h1>
        <Dashboard />
        <Posts />
      </UserProvider>
    </div>
  );
};

export default App;
