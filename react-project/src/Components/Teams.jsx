import React from 'react';
import '../styles/teams.css';

const Teams = () => {

    const storage = () => {
        const storageData = localStorage.getItem('data') || '';
        if(storageData.length > 0) return JSON.parse(storageData);
        return false;
    }

    const show = () => {
        const data = storage();
        console.log(data);
        if (!data) return;
        let html = data.football.teams.map(function (product, index) {
            return (
                <li key={index} className='team'>
                <div className="team-name">{product.name}</div>
                <div className='team-image'>
                    <img src={product.flag} alt={product.name} />
                </div>
                </li>
            );
        });
    return html ? <ul className='teams'>{html}</ul> : '';
    }
    return (
        <div className='teams-block'>
            {show()}
        </div>
    );
}
export default Teams;