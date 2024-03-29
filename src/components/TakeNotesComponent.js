import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList";
import './TakeNotesStyle.css';
import {nanoid} from "nanoid";
import Swal from "sweetalert2";
import {FaFont} from "react-icons/fa";

const TakeNotesComponent = () => {

    // Notes initial state
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Everyone has the right to freedom of thought, " +
                "conscience and religion; this right includes " +
                "freedom to change his religion or belief, " +
                "and freedom.",
            date: "Wed Feb 15 2023"
        },
        {
            id: nanoid(),
            text: "All people have the right to freedom of" +
                " opinion and expression; this right includes " +
                "freedom to hold opinions without interference.",
            date: "Wed Feb 15 2023"
        },
    ]);

    // Retrieve notes when page loads
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data-neutral'));

        if (savedNotes){
            setNotes(savedNotes);
        }

        const fontClass = localStorage.getItem("fontClass-neutral");
        if (fontClass === "font-montserrat") {
            setFontClass("font-montserrat");
            setFontName("Montserrat");
        }
        else if (fontClass === "font-wix") {
            setFontClass("font-wix");
            setFontName("Wix Madefor Display");
        }
        else {
            setFontClass("");
            setFontName("Manrope");
        }
    },[])

    // Save notes to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data-neutral',
            JSON.stringify(notes))
    }, [notes]);

    // Add note function
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toDateString()
        }
        const newNotes = [...notes, newNote]; // new array with old notes and new note
        setNotes(newNotes);
    }

    // Delete note function
    const deleteNote = (id) => {
        // Confirm on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            title: 'Are you sure that you want to delete this note?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                    // Array with the rest of the notes
                    const newNotes = notes.filter((note) => note.id !== id);

                    // Update notes
                    setNotes(newNotes);
            }
        });

    }


    let [fontClass, setFontClass] = useState("font-manrope");
    let [fontName, setFontName] = useState("Manrope");

    const changeFont = () => {
        // Confirm on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
                input: 'font-input',
            },
            inputOptions: {
                'Font Families': {
                    manrope: 'Manrope',
                    montserrat: 'Montserrat',
                    wix: 'Wix Madefor Display'
                }
            },
            title: 'Select a font family',
            input: 'select',
            showCancelButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                if (result.value.toString() === "manrope") {
                    setFontClass("");
                    setFontName("Manrope");
                    localStorage.setItem("fontClass-neutral", "");
                }
                else if (result.value.toString() === "montserrat") {
                    setFontClass("font-montserrat");
                    setFontName("Montserrat");
                    localStorage.setItem("fontClass-neutral", "font-montserrat");
                }
                else if (result.value.toString() === "wix") {
                    setFontClass("font-wix");
                    setFontName("Wix Madefor Display");
                    localStorage.setItem("fontClass-neutral", "font-wix");
                }
            }
        });
    }

    return (
        <div className="out">
            <br/><br/><br/><br/>
            <div className="tn-container">
                <button className="settings-notes" onClick={changeFont}>
                    <FaFont  className="set" size={17} style={{color: '#6069FA', marginRight: '0.3rem', marginLeft: '0.2rem'}}/>
                    <p>{fontName}</p>
                </button>
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    fontClass={fontClass}
                />
            </div>
            <br/><br/>
        </div>
    );
};

export default TakeNotesComponent;