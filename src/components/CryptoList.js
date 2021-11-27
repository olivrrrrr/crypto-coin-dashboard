import {React, useState} from 'react'; 
import CryptoCoin from './CryptoCoin';
import './CryptoList.css'
// import Modal from './Modal'
import Modal from 'react-modal'

function CryptoViewer({cryptoCoins}) {

    const [showModal,setModal] = useState(false); 
    
    
    const handleMouseOver = () => {
        console.log("hello")
    }

  

   const cryptoCoin = cryptoCoins.map((cryptoCoin) =>{
    
    return (
            <CryptoCoin cryptoCoin={cryptoCoin} key={cryptoCoins.id} />
        )
    })

    return (
        <div className="cryptoCoin_list" onMouseOver={handleMouseOver}>
            {cryptoCoin}
            <Modal />
        </div>
    )
}

export default CryptoViewer
