import { useEffect } from "react";

function Useeffect() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default Useeffect;