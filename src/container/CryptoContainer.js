import React from 'react'
import { useEffect, useState } from 'react';
import CryptoViewer from '../components/CryptoList';
import './CryptoContainer.css'

function CryptoContainer() {
    
    const [cryptoCoins, setCryptoCoins] =  useState([]); 
    
    useEffect(()=>{
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d%2C30d%2C1y")
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            setCryptoCoins(data)
            
        });
    }, [])
    
    
    return (
        cryptoCoins ? 

        <div>
            <CryptoViewer cryptoCoins={cryptoCoins} />
        </div>

        : 

        <p>Loading...</p>
    )
}

export default CryptoContainer
