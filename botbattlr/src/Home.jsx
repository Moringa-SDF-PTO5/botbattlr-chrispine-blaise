import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";

function Home() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
 
  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch(`https://json-server-q9ux.onrender.com/bots`)
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  };

  const updateArmy = (armyId) => {
    setArmy((previousArmy) => {
      const isExistBot = previousArmy.some((item) => item.id === armyId);

      if (isExistBot) return previousArmy;

      const selectedBot = bots.find((item) => item.id === armyId);
      const newArmy = [...previousArmy, selectedBot];
      return newArmy;
    });
  };

  const deleteBot = (armyId, context) => {
    switch (context) {
      case "army":
        setArmy((previousArmy) => previousArmy.filter((item) => item.id !== armyId));
        break;
      case "collection":
        setBots((previousBots) => previousBots.filter((item) => item.id !== armyId));
        deleteFromServer(armyId);
        break;
      default:
        break;
    }
  };

  const deleteFromServer = (botId) => {
    fetch(`https://json-server-q9ux.onrender.com/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <>
      <BotArmy troops={army} removeTroop={deleteBot} />
      <BotCollection botCollectionArmy={bots} updateTroops={updateArmy} removeBot={deleteBot} />
    </>
  );
}

export default Home;