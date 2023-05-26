import BigNav from "./BigNav";
import SmallNav from "./SmallNav";
import { useState, useEffect } from "react";
import { FaThList } from "react-icons/fa";

const NavBar = ({isClicked, setIsClicked}) => {
    
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    window.addEventListener('resize', ()=>{

        setWindowWidth(window.outerWidth);
    })
    
    return (

        windowWidth > 830 ? <BigNav setIsClicked={setIsClicked}/> : <SmallNav isClicked={isClicked} setIsClicked={setIsClicked}/>
                
    )
}

export default NavBar
