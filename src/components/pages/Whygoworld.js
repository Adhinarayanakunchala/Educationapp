import React from "react";
import Logo2 from '../../assets/images/education.jpg';
import '../styles/Whygoworld.css';
const Skills =()=>{
return(
    <>
   <div className='b'>
					<label>
						<img src={Logo2} alt='Education planing image'></img>
					</label>
					<div>
						<h1>WHY GO-WORLD</h1><br/>
						<p>Go World is a premier institution that can singlehandedly manage all your needs of
							overseas education, efficiently. We have realised the dreams of more than 3000 students,
							placing them in top universities around the globe. All you should have is a vision, and we will put all our efforts into making it a reality. Yet not convinced?
							Let us give you a good deal of reasons to come to Go World</p><br />
						<h2>STEPWISE SUPERVISION</h2><br/>
						<p>Go World knows the field of overseas education inside out. We have a strong network of universities that
							can help the students choose the best where they fit. Our talented personnel supervise every step of the application and admission procedure.
							With us, there is nothing that can go wrong!</p>
					</div>

				</div>
    </>
)
};
export default Skills;