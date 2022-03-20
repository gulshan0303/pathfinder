import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <p>Follow Me</p>
                       <div className="icons">
                       <li>
                       <i class="fa-brands fa-github"><a href="https://github.com/gulshan0303" target="_blank" rel="noopener noreferrer"></a></i>
                            <i class="fa-brands fa-instagram"><a href="https://www.instagram.com/gulshankathare/" target="_blank" rel="noopener noreferrer"></a></i>
                            <i class="fa-brands fa-linkedin"><a href="https://www.linkedin.com/in/gulshan-kathare-49945b213/" target="_blank" rel="noopener noreferrer"></a></i>
                        
                   </li>
                  
                       </div>
                </div>

                <div class="footer-copyright text-center py-3">made with ❤️ by<span className='namefooter'>  Gulshan Kathare</span>
                </div>

            </footer>
        );
    }
}

export default Footer;