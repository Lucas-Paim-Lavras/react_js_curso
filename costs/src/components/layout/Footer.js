import {FaFacebook, FaInstagram, FaTiktok, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <ul>
                <li><FaFacebook/></li>
                <li><FaTiktok/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>            
            </ul>
        </footer>
    )
}

export default Footer