import {AlertContext} from "../context/alert/alertContext";
import {useContext} from "react";
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    // if (!alert.visible) {
    //     return null
    // }

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание! </strong>
                {alert.text}
                <button type="button" className="close" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}