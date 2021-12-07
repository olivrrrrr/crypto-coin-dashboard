import React from 'react';
import { useEffect, useState } from 'react';
import CryptoViewer from '../components/CryptoList';
import './CryptoContainer.css';
import classNames from 'classnames';
import DatatableList from '../components/DatatableList'
import Navbar from '../components/Navbar';
import { FaSun, FaMoon} from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "./theme.js"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function CryptoContainer() {
    
  //  sort((a, b) => a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1).

    const [cryptoCoins, setCryptoCoins] =  useState([]); 
    const [filter, setFilter] = useState("");
    const [isClicked, setIsClicked] = useState(false); 
    const [isListClicked, setIsListClicked] = useState(false); 



    const [theme, setTheme] = useState("dark");  

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
        setIsClicked(!isClicked);
    }


    // const handleToggle = () =>{
    //     setIsClicked(!isClicked);
    //     console.log(isClicked)
    // } 

    const handleListToggle = () =>{
        setIsListClicked(!isListClicked)
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
    
    // const conditionalStyles = classNames("list", {
    //     "bkg-dark" : isClicked,
    // })

    // const conditionalStylesTitle = classNames("title", {
    //     "dark" : isClicked,
    // })

  // const [isClicked, setIsClicked] = useState(false); 
     
    const handleToggle = () =>{
        setIsClicked(!isClicked);
    }


    const conditionalStyles = classNames("list", {
        "bkg-dark" : isClicked,
    })

    
    return (
        cryptoCoins ? 
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <StyledApp>
        <section >
                <div>
                    {/* <Navbar/> */}
                    {/* <div className="navbar">
                        <h2 className={conditionalStylesTitle}>Cryptocurrency Dashboard</h2>
                        <button className="btn" onClick={handleToggle}>{isClicked ? "Light" : "Dark"}</button>
                        <button className="btn" onClick={handleListToggle}>{isListClicked ? "List" : "Card"}</button>
                    </div> */}
                     <div>
                        <button className="btn" onClick={themeToggler}>{isClicked ?  <FaMoon className="moonIcon" /> : <FaSun className="sunIcon"/> }</button>
                
                            <p>Cryptocurrency Dashboard</p>
   
                        <div>
                        <label for="html">Search: </label>
                        <button className="btn" onClick={handleListToggle}>{isListClicked ? "List" : "Card"}</button>
                        </div>
                        <form>
                            <label for="html">Search: </label>
                            <input type="search" placeholder="search here"  value={filter} onChange={handleType} />    
                        </form> 
                    </div>
                {isListClicked ? <CryptoViewer cryptoCoins={search(cryptoCoins)} /> : 
                    <DatatableList cryptoCoins={cryptoCoins}/> }
            </div>
        </section>
        </StyledApp>
        </ThemeProvider>
        : 

        <p>Loading...</p>
    )
}

export default CryptoContainer
