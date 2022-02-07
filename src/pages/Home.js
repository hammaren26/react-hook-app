import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/fireBaseContext";
import {Loader} from "../components/Loader";
import {AlertContext} from "../context/alert/alertContext";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
            <Form/>
            <hr/>
            {
                loading
                    ? <Loader/>
                    : <Notes notes={notes} onRemove={removeNote}/>
            }

        </>
    )
}