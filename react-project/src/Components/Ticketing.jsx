import React, {useState} from 'react';
import '../styles/ticket.css';
import cart from '../img/cart.png';

const Ticketing = () => {
    let [open, setOpen] = useState(true);

    return(
        <div className={open ? 'ticketing' : 'ticketing-activ'}>
            <div className='btn-area'>
                <button onClick={() => setOpen(!open)} className='ticket-btn'>Купить билет </button>
                <img src={cart} alt="cart"/>
            </div>
            <div className='ticket-choose'>
                <input type="date" required placeholder='выберите дату'/>
                <input type="text" required='required' placeholder='выберите матч'/>
                <div>
                    <button onClick={() =>  alert('Спасибо за покупку')} type='submit' className='ticket-btn'>Купить</button>
                    <button onClick={() => setOpen(!open)} className='ticket-btn'>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default Ticketing;