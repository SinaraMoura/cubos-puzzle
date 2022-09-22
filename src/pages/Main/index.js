import './style.css';
import cards from '../../cards'
import { useState } from 'react';
import Sidebar from '../../components/SideBar';
import Card from '../../components/Card';
import ganhou from '../../assets/congrats.png'

function Main() {
  cards.sort(() => Math.random() - 0.5)
  const [stateCards, setStateCards] = useState([...cards]);
  return (
    <div className='container'>
      <Sidebar
        cards={cards}
        setStateCards={setStateCards}
      />
      <div className={`container-cards 
      ${stateCards.length === 0 ? 'venceu' : ''}`}>
        {
          stateCards.length > 0 ?
            stateCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                stateCards={stateCards}
                setStateCards={setStateCards}
              />
            ))
            :
            <img
              src={ganhou}
            />
        }
      </div>
    </div>
  );
}

export default Main;