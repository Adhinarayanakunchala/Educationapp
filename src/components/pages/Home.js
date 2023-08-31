import React from "react";
import Logo1 from "../../assets/images/student.png";
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='a'>
      <div>
        <h4>WELCOME TO WORLD EDUCATIONS</h4><br/>
        <h1>Overseas Consultancy and Education</h1><br></br>
        <p>
          Since our founding, our primary goal has been to provide immigration
          services in all countries and universities. Our impact speaks louder
          than our words.
        </p>
        <h2>Services Offered</h2><br/>
        <p>
          Welcome to the Immigration Services Center, the most efficient Visa
          Service Provider for all immigration and coaching. Check out our
          services for various countries.
        </p>
      </div>
      <div>
        <img src={Logo1} alt='Student' />
      </div>
    </div>
  );
};

export default Home;
