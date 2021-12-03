import { useEffect, useState } from "react";

function Rooms() {
  const [room, setRoom] = useState("");
  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("Res", res);
        localStorage.setItem("space", res.value);
        setRoom(res.value);
      });
  }, []);

  return <h2>{room}</h2>;
}

export default Rooms;
