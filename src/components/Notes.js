import {CSSTransition, TransitionGroup} from "react-transition-group";
import {AlertContext} from "../context/alert/alertContext";
import {useContext} from "react";

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)
    return (
        <TransitionGroup component='ul' className='list-group'>
            {
                notes.map(note => {
                    return (
                        <CSSTransition
                            key={note.id}
                            classNames={'note'}
                            timeout={800}
                        >
                            <li className='list-group-item note'>
                                <div>
                                    <strong>
                                        {note.title}
                                    </strong>
                                    <small>{note.data}</small>
                                </div>
                                <button
                                    type='button'
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={async (e) => {
                                        await onRemove(note.id)
                                        alert.show('Заметка была удалена', 'danger')
                                    }}
                                >
                                    &times;
                                </button>
                            </li>
                        </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
    )
}