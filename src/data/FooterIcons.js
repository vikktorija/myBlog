import { FaFacebook, FaMediumM, FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

function FooterIcons() {

    return(
        <>
            <div className="icons">
                <a href="https://www.facebook.com/"><FaFacebook className="icons-size" /></a>
                <a href="https://medium.com/"><FaMediumM className="icons-size" /></a>
                <a href="https://web.telegram.org/k/"><FaTelegramPlane className="icons-size" /></a>
                <a href="https://www.instagram.com/"><FaInstagram className="icons-size" /></a>
                <a href="https://lt.linkedin.com/"><FaLinkedin className="icons-size" /></a>

            </div>

        </>
    )
}

export default FooterIcons;