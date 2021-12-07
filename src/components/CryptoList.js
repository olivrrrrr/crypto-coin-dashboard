import {React, useState} from 'react'; 
import CryptoCoin from './CryptoCoin';
import './CryptoList.css'
//import Modal from 'react-modal'

function CryptoViewer({cryptoCoins}) {

   const cryptoCoin = cryptoCoins.map((cryptoCoin) =>{
    
    return (
            <CryptoCoin cryptoCoin={cryptoCoin} key={cryptoCoins.id} />
        )
    })

    return (
    <section>
         <div className="cryptoCoin_list">
            {cryptoCoin}
        </div>
    </section>
       
    )
}

export default CryptoViewer
