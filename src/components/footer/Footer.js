import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className='footer-container__top'>
                <div className='footer-container__top-phone'>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                </div>
                <div className='footer-container__top-contact'>
                    <p>Ponte en contacto</p>
                    <ul>
                        <li>1234567@gmail.com</li>
                        <li>+00 123 4567 89</li>
                    </ul>
                </div>
            </div>
            <div className='footer-container__item'>
                <div className='footer-container__item-top'>
                    <p>Condiciones</p>
                    <p>Politicas</p>
                </div>

                <div className='footer-container__item-down'>
                    <p>Copyright &copy; 2022</p>
                </div>
            </div>
        </div>
    )
}

export default footer