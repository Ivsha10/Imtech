import { FaThList } from "react-icons/fa";
import DropDown from "./DropDown";
import { useCallback, useState } from "react";
const SmallNav = ({isClicked, setIsClicked}) => {

    
    return (
        <>
        <nav className="smallNav">
            <label>ImTech</label> 
            <FaThList className="drop" role="button" onClick={()=>setIsClicked(!isClicked)}/>
            {isClicked && <DropDown className = 'dropDown' setIsClicked={setIsClicked}/>}
       </nav>
             
            
        </>
        
    )
}

export default SmallNav
