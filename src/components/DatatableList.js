import React from 'react'
import Datatable from './Datatable'

function DatatableList({ cryptoCoins }) {

    const cryptoCoin = cryptoCoins.map((cryptoCoin) =>{
    
        return (
                <Datatable cryptoCoin={cryptoCoin} key={cryptoCoins.id} />
            )
        })
    
        return (
            <div className="cryptoCoin_list">
                {cryptoCoin}
            </div>
        )
}

export default DatatableList
