import { useEffect, useState } from "react";
import FunctionalSpl from "./components/FunctionalSpl";
import DataFetchingHook from "./components/DataFetchingHook";
import Profile from "./components/UsingSWR";
import CheckOnline from "./components/UseIsOnline";

function App() {
  return (
    <>
      {/* <FunctionalSpl /> */}
      {/* <DataFetchingHook /> */}
      {/* <Profile /> */}
      <CheckOnline />
    </>
  );
}

export default App;
