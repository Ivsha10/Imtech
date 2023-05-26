import { Link } from "react-router-dom"
const DropDown = ({setIsClicked}) => {
    return (
        <ul>
            <li>
                <button onClick={()=>setIsClicked(false)} style={{width: '100%'} }><Link className = 'Link' to = '/' > Home </Link></button>
            </li>
            <li>
                <button onClick={()=>setIsClicked(false)} style={{width: '100%'}}><Link className = 'Link' to = '/services' > Services </Link></button>
            </li>
            <li>
                <button onClick={()=>setIsClicked(false)} style={{width: '100%'}}><Link className = 'Link' to = '/products' > Products </Link></button>
            </li>
            <li>
                <button onClick={()=>setIsClicked(false)} style={{width: '100%'}}><Link className = 'Link' to = '/contactus' > Contact Us </Link> </button>
            </li>
            <li>
            <button className="signBtn" onClick={()=>setIsClicked(false)} style={{width: '20%'}}><Link className = 'Link' to = '/signUp' > Sign Up </Link> </button>
            </li>
        </ul>
    )
}

export default DropDown
