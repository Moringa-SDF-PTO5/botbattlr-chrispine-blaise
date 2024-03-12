import React from 'react';
import './index.css';

function BotCard({ img, name, botClass, health, armor, damage, deleteBot, id }) {
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent click propagation to parent elements
    deleteBot(id);
  };

  return (
    <div className="container" onClick={() => deleteBot(id)}>
      <div className="card">
        <i className='bx bxs-x-circle cancel-icon' onClick={handleDelete}></i>
        <img src={img} alt={name} />
        <div className="card__details">
          <span className="bot_name">{name}</span>
          <span className="bot_class">{botClass}</span>
          <div className="bot_info">
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;