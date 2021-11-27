import React from 'react'
import './CryptoCoin.css'
import classNames from "classnames"

function CryptoCoin({cryptoCoin}) {
       
   const conditionalStyles = classNames("cryptoCoin_container", {"bkg-green": cryptoCoin.price_change_percentage_24h > 0, "bkg-red": cryptoCoin.price_change_percentage_24h < 0 })
   
   
    return (
        <div className={conditionalStyles}>
            <p>{cryptoCoin.name}</p>
            <div className="cryptoCoin">
                <div className="crypto_image">
                     <img src={cryptoCoin.image} alt="coin"/>
                     <h2>{cryptoCoin.symbol}</h2>
                </div>
                <div className="crypto_info">
                    <p>Rank: {cryptoCoin.market_cap_rank}</p>
                    <p>£{cryptoCoin.current_price}</p>
                    <p>24h: {cryptoCoin.price_change_percentage_24h}%</p>
                </div>                
            </div>
        </div>
    )
}

export default CryptoCoin
