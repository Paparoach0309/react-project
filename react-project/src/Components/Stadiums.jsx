import React from 'react';

class Stadiums extends React.Component {
    constructor() {
        super();
        this.storage = this.storage.bind(this);
        this.show = this.show.bind(this);
    
    }
    storage() {
            const storageData = localStorage.getItem('data') || '';

            if(storageData.length > 0) return JSON.parse(storageData);

        return false;
    }

    show() {
        const data = this.storage();
        if (!data) return;

        let html = data.football.stadiums.map(function (product, index) {
            return (
                <li key={index}>
                <div className="stadium-city">{product.city}</div>
                    <div className='stadium-image'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="stadium-name">{product.name}</div>
                </li>
            );
            
        });
    return html ? <ul className='stadiums'>{html}</ul> : '';
        
    }
    
    render () {
        return (
            <div className='stadiums-block'>
                {this.show()}
            </div>
        );
        
    }
}

export default Stadiums;