import './style.css'
import cardBack from '../../assets/card-back.png';

function Card({ card, stateCards, setStateCards }) {
    const handleTurnCard = () => {
        const localCards = [...stateCards];
        const cardClicado = localCards.find((element) => {
            return element.id === card.id;
        })
        const cardsViradas = localCards.filter((carta) => {
            return carta.turned === true;
        })
        if (cardsViradas.length >= 2) {
            return;
        }
        if (cardsViradas.length > 0 && card.id === cardsViradas[0].id) {
            return;
        }
        if (cardsViradas.length && card.slug === cardsViradas[0].slug) {
            cardClicado.turned = !cardClicado.turned;
            setStateCards(localCards);
            handleGotCards(cardClicado, cardsViradas[0], localCards);
            return;
        }
        cardClicado.turned = !cardClicado.turned;
        setStateCards(localCards);
        if (cardsViradas.length) {
            setTimeout(() => {
                localCards.forEach((element) => {
                    element.turned = false;
                })
                setStateCards([...localCards])
            }, 1000);
        }
    }
    const handleGotCards = (card1, card2, localCards) => {
        setTimeout(() => {
            const cartasCertas = localCards.filter((element) => {
                return element.id !== card1.id && element.id !== card2.id
            })
            setStateCards(cartasCertas);
        }, 1000);
    }
    return (
        <img
            onClick={() => handleTurnCard()}
            className='img-card'
            key={card.id}
            src={card.turned ? card.image : cardBack}
            alt=''
        />
    )
}

export default Card;