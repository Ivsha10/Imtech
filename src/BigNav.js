import { Link } from "react-router-dom"
const BigNav = ({setIsClicked}) => {
    return (
        <nav className="bigNav">
            <label> ImTech </label> 
            <button onClick={()=> setIsClicked(false)}> <Link className = 'Link' to = '/' > Home </Link> </button>
            <button onClick={()=> setIsClicked(false)}> <Link className = 'Link' to = '/services'>Services</Link></button>
            <button onClick={()=> setIsClicked(false)}><Link className = 'Link' to = '/products'> Products </Link></button>
            <button onClick={()=> setIsClicked(false)}><Link className = 'Link' to = '/contactus'> Contact Us </Link></button>
            <button className="signBtn" onClick={()=> setIsClicked(false)}><Link className = 'Link' to = '/signUp'> Sign Up </Link></button>
        </nav>
        
    )
}

export default BigNav
