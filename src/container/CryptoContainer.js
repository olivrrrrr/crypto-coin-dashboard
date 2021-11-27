import React from 'react'
import { useEffect, useState } from 'react';
import CryptoViewer from '../components/CryptoList';
import './CryptoContainer.css'
import classNames from 'classnames';

function CryptoContainer() {
    
  //  sort((a, b) => a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1).

    const [cryptoCoins, setCryptoCoins] =  useState([]); 
    const [filter, setFilter] = useState("");
    const [isClicked, setIsClicked] = useState(false)

    const handleToggle = () =>{
        setIsClicked(!isClicked);
    } 
   

    useEffect(()=>{
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d%2C30d%2C1y")
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            setCryptoCoins(data)
            
        });
    }, [])
    

    const handleType = (e) => {
        setFilter(e.target.value)
    }

    const search = (cryptoCoins) =>{
        return cryptoCoins.filter(cryptoCoin=>cryptoCoin.name.toLowerCase().indexOf(filter.toLowerCase().trim()) > -1)
    }   
    
    const conditionalStyles = classNames("list_container", {
        "bkg-dark" : isClicked,
    })

    const conditionalStylesTitle = classNames("title", {
        "dark" : isClicked,
    })

    
    return (
        cryptoCoins ? 
        <section className={conditionalStyles}>
                <div className="list">
                    <div className="navbar">
                        <h2 className={conditionalStylesTitle}>Cryptocurrency Dashboard</h2>
                        <button className="btn" onClick={handleToggle}>{isClicked ? "Light" : "Dark"}</button>
                    </div>
                    <form>
                        <input type="search" placeholder="search here"  value={filter} onChange={handleType} />    
                    </form> 
                <CryptoViewer cryptoCoins={search(cryptoCoins)} />
            </div>

        </section>


        : 

        <p>Loading...</p>
    )
}

export default CryptoContainer
