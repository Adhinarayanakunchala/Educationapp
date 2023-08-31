import React from "react";
import { NavLink} from "react-router-dom";
import Goworld from '../assets/images/goworld.png';
const Navbar = ()=>{
	return(
		<>
         <nav>
			<img src={Goworld} alt="GoWord Consultant Logo"/>
			<ul>
				<li>
					<NavLink to="/#home">Home</NavLink>
				</li>
				<li>
					<NavLink to="/#about">About</NavLink>
				</li>
				<li>
					<NavLink to="/#goworld">Whygoworld</NavLink>
				</li>
				<li>
					<NavLink to="/#coaching">Coaching</NavLink>
				</li>
				<li>
					<button className="btn"><NavLink to="/#" className="active">Apply</NavLink></button>
				</li>
			</ul>
		 </nav>
		</>
	)
};
export default  Navbar;

