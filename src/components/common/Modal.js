import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

const Modal = ({ children, visible, onCloseModal }) => {

    useEffect(() => {
        const body = document.querySelector("#root");

        if (visible) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "initial";
        }

    }, [visible])

    return (
        <div className={`modal ${visible ? 'show' : 'hide'}`}>
            <div className="modal__content">
                <span className="modal__content--close" onClick={onCloseModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
                {children}
            </div>
        </div>
    )
}

export default Modal