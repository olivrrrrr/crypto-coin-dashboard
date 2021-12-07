import React from 'react'

function Datatable({cryptoCoin}) {
    return (
        <div className="coin-container">
            <div className="coin-row ">
                <div className="coin">
                    <img src={cryptoCoin.image} className="coin" />
                    <h1>{cryptoCoin.name}</h1>
                    <p className="coin-symbol">{cryptoCoin.symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${cryptoCoin.current_price}</p>
                </div>
                { cryptoCoin.price_change_percentage_24h < 0 ? 
                (<p className="coin-percent red">{cryptoCoin.price_change_percentage_24h}%</p>) : 
                (<p className="coin-percent green">{cryptoCoin.price_change_percentage_24h}%</p>)
                }
            </div>
        </div>
    )
}

export default Datatable
