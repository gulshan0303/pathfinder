import React, {Component} from 'react';
import "./about.css";
import gk from  "./images/gk.jpg";
import {Link} from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <div className='about'>
                 <div className="cover-photo">
                     <img className='profile' src={gk} alt="myProfile" />
                 </div> 
                 <div className="profile-name">Gulshan Kathare</div> 
                 <p className='aboutMe'>Mern Stack Developer and   Problem solver</p> 
                 <button className='msg-btn'>Message</button>

                 <button className='flo-btn'>Following</button>
                 <div className='icons'>
                       <i class="fa-brands fa-github"><a href="https://github.com/gulshan0303" target="_blank" rel="noopener noreferrer"></a></i>
                            <i class="fa-brands fa-instagram"><a href="https://www.instagram.com/gulshankathare/" target="_blank" rel="noopener noreferrer"></a></i>
                            <i class="fa-brands fa-linkedin"><a href="https://www.linkedin.com/in/gulshan-kathare-49945b213/" target="_blank" rel="noopener noreferrer"></a></i>
                 </div>

                 <Link to="/">
                     <button className='last-btn'>  Back to the Home</button>
                  </Link>
            </div>
            
            
        );
    }
}

export default About;