import React from 'react';
import BotCard from './BotCard';

function BotCollection({ botCollectionArmy, updateTroops, removeBot }) {
  const renderBotCards = () => {
    return botCollectionArmy.map((bot) => (
      <div key={bot.id} onClick={() => updateTroops(bot.id)}>
        <BotCard
          img={bot.avatar_url}
          name={bot.name}
          botClass={bot.bot_class}
          health={bot.health}
          armor={bot.armor}
          damage={bot.damage}
          deleteBot={() => removeBot(bot.id, "collection")}
          id={bot.id}
        />
      </div>
    ));
  };

  return (
    <div id='bot_cont'>
      {botCollectionArmy.length ? renderBotCards() : <p>No bots found.</p>}
    </div>
  );
}

export default BotCollection;