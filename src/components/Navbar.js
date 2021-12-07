// import React from 'react'
// import {useState, useEffect} from 'react'
// import classNames from 'classnames';
// import { FaSun, FaMoon} from "react-icons/fa";
// import './Navbar.css'
// import { BsFillMoonFill } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai"



// function Navbar() {

//     const [isClicked, setIsClicked] = useState(false); 
//     const [theme, setTheme] = useState("light");  

//     const themeToggler = () => {
//         theme === "light" ? setTheme("dark") : setTheme("li")
//     }




//     const handleToggle = () =>{
//         setIsClicked(!isClicked);
//     }


//     const conditionalStyles = classNames("list", {
//         "bkg-dark" : isClicked,
//     })

//     return (
//         <div className={conditionalStyles}>
    
//              <button className="btn" onClick={handleToggle}>{isClicked ?  <FaSun className="sunIcon"/> : <FaMoon className="moonIcon" />}</button>
//          </div>
//     )
// }

// export default Navbar

