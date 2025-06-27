import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){

    return(
        <Footer>
            <ul class>
                <li>
                    <FaFacebook></FaFacebook>
                </li>
                <li>
                    <FaInstagram></FaInstagram>
                </li>
                <li>
                    <FaLinkedin></FaLinkedin>
                </li>
            </ul>
        </Footer>
    )
}

export default Footer