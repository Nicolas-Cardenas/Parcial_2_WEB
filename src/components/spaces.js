import { useEffect, useState } from "react";

function Spaces() {
  const [space, setSpace] = useState("");
  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("Res", res);
        localStorage.setItem("space", res.value);
        setSpace(res.value);
      });
  }, []);

  return (<h1>My Spaces</h1>)(<h2>{space}</h2>);
}

export default Spaces;
