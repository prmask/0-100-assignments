import { useEffect, useState } from "react";

const FunctionalSpl = () => {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  }, []);

  return <>{render ? <MyComponent /> : <div></div>}</>;
};

const MyComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);
};

export default FunctionalSpl;
