import { ChangeEvent, FormEvent, useState } from "react";

import { trpc } from "../utils/trpc";

const NoteForm = () => {

    const [note, setNote] = useState({
        title: '',
        description: ''
    })

    const addNote = trpc.note.create.useMutation()
    const utils = trpc.useContext()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNote.mutate(note, {
            onSuccess: () => {
                console.log('Note Added Successfully')
                utils.note.get.invalidate()
            }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   name="title" 
                   placeholder="title" 
                   autoFocus 
                   onChange={handleChange}
            />

            <textarea name="description" 
                      placeholder="description" 
                      onChange={handleChange}
            ></textarea>

            <button type="submit"> Save </button>
        </form>
     );
}
 
export default NoteForm;