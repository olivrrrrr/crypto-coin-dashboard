import React from 'react'
import './CryptoCoin.css'

function CryptoCoin({cryptoCoin}) {
    return (
        <div className="cryptoCoin_container">
            <div className="cryptoCoin">
                <img src={cryptoCoin.image} alt="coin"/>
                <p>{cryptoCoin.current_price}</p>
                <p>{cryptoCoin.name}</p>
            </div>
        </div>
    )
}

export default CryptoCoin
