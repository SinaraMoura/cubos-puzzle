import './style.css'
import logo from '../../assets/logo.png'

function Sidebar({ cards, setStateCards }) {
    const handleReset = () => {
        cards.forEach((card) => {
            card.turned = false;
        });

        setStateCards(cards);
    }
    return (
        <div className="sidebar">
            <div className='puzzle'>
                <img src={logo} alt='' />
                <strong>CUBOS PUZZLE</strong>
            </div>
            <button onClick={() => handleReset()}>RESET</button>
        </div>
    )
}

export default Sidebar;